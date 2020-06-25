import React from "react";

import { PropTypes } from "prop-types";
import { FaPlusCircle, FaTrashAlt, FaEdit } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProjectSection = (props) => {
  return (
    <div className="col-3" style={{ textAlign: "left" }}>
      <Modal show={props.showModal} onHide={props.onHide} centered>
        <Modal.Header
          style={{ backgroundColor: "#000", color: "#fff", fontSize: "10px" }}
        >
          <Modal.Title>Add a Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.onSubmit}>
            <input
              className="form-control mb-4"
              id="projectInput"
              type="text"
              value={props.value}
              onChange={props.onChange}
              placeholder="Add a Project"
            />
          </form>
          {props.errors && <div className="text-danger">{props.errors}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="sm" onClick={props.onSubmit}>
            Add Project{" "}
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="list-group">
        <li
          className="list-group-item 
        font-weight-bold bg-dark text-light 
        d-flex justify-content-between"
        >
          Projects{" "}
          <button
            onClick={props.onAddButtonClick}
            className="btn btn-primary line-height-1"
          >
            <FaPlusCircle />
          </button>
        </li>

        {props.projects &&
          props.projects.map((project, i = 0) => (
            <a
              className="list-group-item list-group-item-action d-flex justify-content-between shadow-none"
              style={{ fontSize: "15px" }}
              key={i}
            >
              {project.name}

              <div
                className="d-flex ml-1"
                style={{ fontSize: "16px", height: "auto" }}
              >
                <button className="btn btn-sm shadow-none">
                  <FaTrashAlt />
                </button>
                <button
                  className="btn  btn-sm shadow-none"
                  onClick={() => alert("delete")}
                >
                  <FaEdit />
                </button>
              </div>
            </a>
          ))}
      </div>
      <br />
    </div>
  );
};

ProjectSection.propTypes = {
  projects: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  onAddButtonClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string,
  showModal: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ProjectSection;
