import React from "react";
import { PropTypes } from "prop-types";
import { FaPlusCircle } from "react-icons/fa";

const ProjectSection = (props) => {
  const handleClick = () => {
    // console.log("Handle Click");
    return (
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-3" style={{ textAlign: "left" }}>
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
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="list-group">
        <li
          className="list-group-item 
        font-weight-bold bg-dark text-light 
        d-flex justify-content-between"
        >
          Projects{" "}
          <a onClick={handleClick}>
            {" "}
            <FaPlusCircle />
          </a>
        </li>

        {props.projects &&
          props.projects.map((project, i = 0) => (
            <li className="list-group-item list-group-item-action" key={i}>
              {project.name}
            </li>
          ))}
      </div>
      <br />
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
