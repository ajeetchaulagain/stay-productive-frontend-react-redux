import React from "react";
import { PropTypes } from "prop-types";

const ProjectSection = (props) => {
  return (
    <div className="col-3" style={{ textAlign: "left" }}>
      <div className="list-group">
        <li className="list-group-item font-weight-bold bg-dark text-light">
          Projects
        </li>

        {props.projects &&
          props.projects.map((project, i = 0) => (
            <li className="list-group-item list-group-item-action" key={i}>
              {project.name}
            </li>
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
  projects: PropTypes.array,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProjectSection;
