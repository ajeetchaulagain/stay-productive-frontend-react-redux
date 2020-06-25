import React, { Component } from "react";
import Joi from "@hapi/joi";
import { connect } from "react-redux";
import * as taskActions from "../../store/actions/taskActions";
import * as projectActions from "../../store/actions/projectActions";
import PropTypes from "prop-types";
import TaskSection from "./TaskSection";
import ProjectSection from "./ProjectSection";
import { toast } from "react-toastify";
import Spinner from "../common/Spinner";

class DashboardPage extends Component {
  state = {
    task: {
      title: "",
    },
    project: {
      name: "",
    },

    apiErrorMessage: "",

    projectInputErrors: "",
    showProjectModal: false,
  };

  componentDidMount() {
    console.log("componentDidMount() called");
    if (this.props.projects.length === 0) {
      this.props.loadProjects();
    }
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate() called");

    if (prevProps.apiError !== this.props.apiError) {
      console.log("apiErrro", this.props.apiError);
      if (this.props.apiError) toast.error(this.props.apiError);
    }

    // if (prevProps.apiError !== this.props.apiError) {
    //   this.setState({ apiErrorMessage: this.props.apiError });
    //   console.log("serverError->", this.state.serverError);
    // }
  }

  handleAddProject = () => {
    this.setState({ showProjectModal: true });
  };

  handleHideModal = () => {
    this.setState({ showProjectModal: false });
  };

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
    toast.success("Task Added", { autoClose: 1000, hideProgressBar: true });
  };

  validateProjectInputFormData = (data) => {
    const schema = Joi.object({
      name: Joi.string().required().min(5),
    });
    return schema.validate(data, { abortEarly: true });
  };

  handleProjectFormSubmit = (event) => {
    event.preventDefault();

    const { error } = this.validateProjectInputFormData(this.state.project);
    if (error) {
      this.setState({ projectInputErrors: error.details[0].message });
    } else {
      this.props.saveProject(this.state.project);
      this.setState({ projectInputErrors: "" });
      this.setState({ showProjectModal: false });
      this.setState({});
      const project = { ...this.state.project, name: "" };
      this.setState({ project });
    }
  };

  handleProjectInputChange = (event) => {
    const project = { ...this.state.project, name: event.target.value };
    this.setState({ project });
  };

  handleAddProject = () => {
    this.setState({ showProjectModal: true });
    console.log("showModal->", this.state.showProjectModal);
  };

  render() {
    console.log("render() called");
    return (
      <div className="container px-0 mt-1 ml-0 px-0 pb-5 h-100">
        <br />
        <br />
        {this.props.isFetching ? (
          <Spinner />
        ) : (
          <div className="row">
            <ProjectSection
              onSubmit={this.handleProjectFormSubmit}
              projects={this.props.projects.slice().reverse()}
              onChange={this.handleProjectInputChange}
              value={this.state.project.name}
              errors={this.state.projectInputErrors}
              showModal={this.state.showProjectModal}
              onAddButtonClick={this.handleAddProject}
              onHide={this.handleHideModal}
            />
            <TaskSection
              onSubmit={this.handleTaskFormSubmit}
              tasks={this.props.tasks}
              onChange={this.handleTaskInputChange}
              value={this.state.task.title}
            />
          </div>
        )}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  createProject: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  loadProjects: PropTypes.func.isRequired,
  apiError: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  saveProject: PropTypes.func.isRequired,
  projectInputErrors: PropTypes.string,
};

// Mapping State to Props
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    projects: state.projects.list,
    apiError: state.apiError.message,
    isFetching: state.projects.isFetching,
  };
};

// Mapping Dispatch to Props
const mapDispatchToProps = {
  createTask: taskActions.createTask,
  loadProjects: projectActions.loadProjects,
  createProject: projectActions.createProject,
  saveProject: projectActions.saveProject,
};

// const mapDispatchToProps = (dispatch) => {
//   debugger;
//   return {
//     taskActions: bindActionCreators(taskActions, dispatch),
//     projectActions: bindActionCreators(projectActions, dispatch),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
