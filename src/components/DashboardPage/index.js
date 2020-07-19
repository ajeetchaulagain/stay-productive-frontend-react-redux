import React, { Component } from "react";
import { connect } from "react-redux";
import * as taskActions from "../../store/actions/taskActions";
import * as projectActions from "../../store/actions/projectActions";
import PropTypes from "prop-types";
// import TaskSection from "./TaskSection";
import ProjectSection from "./ProjectSection";
import { Row, Col, notification } from "antd";
import styled from "styled-components";

const DashboardPageWrapper = styled.div`
  /* background-color: red; */
`;

class DashboardPage extends Component {
  state = {
    task: {
      title: "",
    },
  };

  componentDidMount() {
    console.log("DASHBOARD COMPONENT--------componentDidMount");
    const { projects, loadProjects } = this.props;

    if (projects.length === 0) {
      loadProjects();
    }
  }

  componentDidUpdate(prevProps) {
    console.log("DASHBOARD COMPONENT--------componentDidUpdate");
    const { apiErrorMessage } = this.props;
    console.log("apiErrorMessage", apiErrorMessage);

    if (prevProps.apiErrorMessage !== apiErrorMessage) {
      console.log("apiErrorMessage", apiErrorMessage);

      if (apiErrorMessage) {
        const config = {
          message: "Oops. Something went Wrong",
          description: apiErrorMessage,
          duration: 2,
          style: {
            backgroundColor: "#ffdada",
            top: "60px",
          },
        };
        notification.error(config);
      }
    }
  }

  handleTaskInputChange = (event) => {
    const task = { ...this.state.task, title: event.target.value };
    this.setState({ task });
  };

  // handle
  handleTaskFormSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    const task = { ...this.state.task, title: "" };
    this.setState({ task });
  };

  render() {
    console.log("DASHBOARD COMPONENT--------render");
    const {
      // tasks,
      projects,
      saveProject,
      deleteProject,
      updateProject,
      isFetching,
    } = this.props;

    return (
      <DashboardPageWrapper>
        <Row gutter={20}>
          <Col span={6}>
            <ProjectSection
              projects={projects.slice().reverse()}
              onSave={saveProject}
              isFetching={isFetching}
              onDelete={deleteProject}
              onUpdate={updateProject}
            />
          </Col>
          <Col span={18}>{/* <TaskSection tasks={tasks} /> */}</Col>
        </Row>
      </DashboardPageWrapper>
    );
  }
}

DashboardPage.propTypes = {
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  loadProjects: PropTypes.func.isRequired,
  apiErrorMessage: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  saveProject: PropTypes.func.isRequired,
  projectInputError: PropTypes.string,
  deleteProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
};

// Mapping State to Props
const mapStateToProps = (state) => {
  console.log("state-", state);

  return {
    tasks: state.tasks,
    projects: state.projects.list,
    apiErrorMessage: state.apiError.message,
    isFetching: state.projects.isFetching,
  };
};

// Mapping Dispatch to Props
const mapDispatchToProps = {
  createTask: taskActions.createTask,
  loadProjects: projectActions.loadProjects,
  saveProject: projectActions.saveProject,
  deleteProject: projectActions.deleteProject,
  updateProject: projectActions.updateProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
