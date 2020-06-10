import React from "react";
import PropTypes from "prop-types";

const TaskList = (props) => {
  return (
    <div className="col">
      <form onSubmit={props.onFormSubmit}>
        <input
          className="form-control mb-4"
          id="taskInput"
          type="text"
          placeholder="Add a task"
          value={props.value}
          onChange={props.onInputChange}
        />
      </form>
      <ul className="list-group">
        {props.tasks.map((task) => (
          <li className="list-group-item" key={task.title}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TaskList;
