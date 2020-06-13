import React from "react";
import { PropTypes } from "prop-types";

const ProjectSection = (props) => {
  return (
    <div className="col-3" style={{ textAlign: "left" }}>
      <div className="list-group">
        <li className="list-group-item font-weight-bold bg-dark text-light">
          Projects
        </li>

        {props.projects.map((project) => (
          <li
            className="list-group-item list-group-item-action"
            key={project.title}
          >
            Test Project ..
          </li>
          // <a
          //   key={project.title}
          //   href="#"
          //   className="list-group-item list-group-item-action
          //   d-flex justify-content-between align-items-center"
          // >
          //   {project.title}
          // </a>
        ))}
      </div>
      <br />
      <form onSubmit={props.onFormSubmit}>
        <input
          className="form-control mb-4"
          id="projectInput"
          type="text"
          value={props.value}
          onChange={props.onInputChange}
          placeholder="Add a Project"
        />
      </form>
    </div>
  );
};

ProjectSection.propTypes = {
  projects: PropTypes.array.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProjectSection;
