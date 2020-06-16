// import Pomodoro from "./Pomodoro";
import React, { Component } from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskActions";
import * as projectActions from "../../redux/actions/projectActions";
import PropTypes from "prop-types";
import TaskSection from "./TaskSection";
import ProjectSection from "./ProjectSection";
import { toast } from "react-toastify";

class DashboardPage extends Component {
  state = {
    task: {
      title: "",
    },
    project: {
      title: "",
    },
  };

  componentDidMount() {
    console.log("ComponentDidMount called!");
  }

  handleChange = (event) => {
    const task = { ...this.state.task, title: event.target.value };
    this.setState({ task });
  };

  // handle
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    const task = { ...this.state.task, title: "" };
    this.setState({ task });
    toast.success("Task Added", { autoClose: 1000, hideProgressBar: true });
  };

  handleProjectFormSubmit = (event) => {
    event.preventDefault();
    this.props.createProject(this.state.project);
    const project = { ...this.state.project, title: "" };
    this.setState({ project });
    toast.info("Project Saved", { autoClose: 1000, hideProgressBar: true });
  };

  handleProjectInputChange = (event) => {
    const project = { ...this.state.project, title: event.target.value };
    this.setState({ project });
    console.log("state object-", this.state);
  };

  render() {
    return (
      <div className="container px-0 mt-1 ml-0 px-0 pb-5 h-100">
        <br />
        <br />
        <div className="row">
          <ProjectSection
            onFormSubmit={this.handleProjectFormSubmit}
            projects={this.props.projects}
            onInputChange={this.handleProjectInputChange}
            value={this.state.project.title}
          />
          <TaskSection
            onFormSubmit={this.handleSubmit}
            tasks={this.props.tasks}
            onInputChange={this.handleChange}
            value={this.state.task.title}
          />
        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  createProject: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
};

// Mapping State to Props
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    projects: state.projects,
  };
};

// Mapping Dispatch to Props
const mapDispatchToProps = {
  createTask: taskActions.createTask,
  createProject: projectActions.createProject,
};

// const mapDispatchToProps = (dispatch) => {
//   debugger;
//   return {
//     taskActions: bindActionCreators(taskActions, dispatch),
//     projectActions: bindActionCreators(projectActions, dispatch),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
