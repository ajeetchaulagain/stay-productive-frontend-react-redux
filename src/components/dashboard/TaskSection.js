import React from "react";
import PropTypes from "prop-types";
import {
  FaTrashAlt,
  FaEdit,
  FaCheck,
  FaTasks,
  FaPlayCircle,
} from "react-icons/fa";

const TaskSection = (props) => {
  return (
    <div className="col taskWrapper">
      <form onSubmit={props.onSubmit}>
        <input
          className="form-control mb-4"
          id="taskInput"
          type="text"
          placeholder="Add a task, Press enter to save"
          value={props.value}
          onChange={props.onChange}
        />
        <br />
      </form>
      <p>
        Stay Productive <FaTasks />
      </p>
      <ul className="list-group table-editable">
        {props.tasks.map((task) => (
          <li
            className="list-group-item d-flex justify-content-between mb-3 p-2 px-3 "
            key={task.title}
          >
            <span>
              <a href="#" className="btn btn-sm">
                {" "}
                <FaPlayCircle />
              </a>{" "}
              {task.title}{" "}
            </span>
            <span>
              <span
                style={{
                  color: "green",
                  fontSize: "12px",
                  marginRight: "8px",
                }}
              >
                9 March
              </span>
              <a
                className="btn btn-outline-primary btn-sm"
                onClick={() => alert("Edit")}
                style={{ marginRight: ".5rem" }}
                href="#"
              >
                Mark as Completed <FaCheck />
              </a>
              <a
                className="btn btn-outline-primary btn-sm"
                onClick={() => alert("Edit")}
                href="#"
                style={{ marginRight: ".5rem" }}
              >
                <FaEdit />
              </a>
              <a
                className="btn btn-outline-danger btn-sm"
                onClick={() => alert("delete")}
                href="#"
              >
                <FaTrashAlt />
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskSection.propTypes = {
  tasks: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TaskSection;
