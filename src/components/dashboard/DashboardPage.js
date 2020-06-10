import Pomodoro from "./Pomodoro";
import ProjectList from "./ProjectList";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskAction";
import PropTypes from "prop-types";
import TaskList from "./TaskList";

class DashboardPage extends Component {
  state = {
    task: {
      title: "",
    },
    test: "hello there",
  };

  componentDidMount() {
    console.log("ComponentDidMount called!");
  }
  handleChange = (event) => {
    const task = { ...this.state.task, title: event.target.value };
    this.setState({ task });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createTask(this.state.task);
    const task = { ...this.state.task, title: "" };
    this.setState({ task });
  };
  render() {
    return (
      <div className="container px-0 mt-1 ml-0 px-0">
        <Pomodoro />
        <div className="row">
          <ProjectList />
          <TaskList
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
