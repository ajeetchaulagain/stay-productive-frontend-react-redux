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
    projectInputError: "",
    showProjectModal: false,
  };

  componentDidMount() {
    const { projects } = this.props;
    console.log("componentDidMount() called");
    if (projects.length === 0) {
      this.props.loadProjects();
    }
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate() called");

    const { apiError } = this.props;
    if (prevProps.apiError !== apiError) {
      console.log("apiErrro", apiError);
      if (apiError) toast.error(apiError);
    }
  }

  handleAddProject = () => {
    this.setState({ showProjectModal: true });
  };

  handleHideModal = () => {
    this.setState({ showProjectModal: false });
  };

  handleDeleteProject = (project) => {
    this.props.deleteProject(project);
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
      this.setState({ projectInputError: error.details[0].message });
    } else {
      this.props.saveProject(this.state.project);
      // this.setState({ projectInputError: "" });
      // this.setState({ showProjectModal: false });
      // this.setState({});
      const project = { ...this.state.project, name: "" };

      this.setState({
        project,
        projectInputError: "",
        showProjectModal: false,
      });
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
    const { task, project, projectInputError, showProjectModal } = this.state;
    const { tasks, projects } = this.props;
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
              projects={projects.slice().reverse()}
              onChange={this.handleProjectInputChange}
              value={project.name}
              errors={projectInputError}
              showModal={showProjectModal}
              onAddButtonClick={this.handleAddProject}
              onHide={this.handleHideModal}
              onDelete={this.handleDeleteProject}
            />
            <TaskSection
              onSubmit={this.handleTaskFormSubmit}
              tasks={tasks}
              onChange={this.handleTaskInputChange}
              value={task.title}
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
  projectInputError: PropTypes.string,
  deleteProject: PropTypes.func.isRequired,
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
  deleteProject: projectActions.deleteProject,
};

// const mapDispatchToProps = (dispatch) => {
//   debugger;
//   return {
//     taskActions: bindActionCreators(taskActions, dispatch),
//     projectActions: bindActionCreators(projectActions, dispatch),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
