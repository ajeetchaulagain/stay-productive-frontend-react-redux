import Pomodoro from "./Pomodoro";
import ProjectList from "./ProjectList";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskAction";
import PropTypes from "prop-types";

class DashboardPage extends Component {
  state = {
    task: {
      title: "",
    },
  };

  handleChange = (event) => {
    const task = { ...this.state.task, title: event.target.value };
    this.setState({ task });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createTask(this.state.task);
  };
  render() {
    return (
      <div className="container px-0 mt-1 ml-0 px-0">
        <Pomodoro />
        <div className="row">
          <ProjectList />
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <input
                className="form-control mb-4"
                id="taskInput"
                type="text"
                placeholder="Add a task"
                value={this.state.task.title}
                onChange={this.handleChange}
              />
            </form>
            {this.props.tasks.map((task) => (
              <li key={task.title}>{task.title}</li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  actions: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(taskActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
