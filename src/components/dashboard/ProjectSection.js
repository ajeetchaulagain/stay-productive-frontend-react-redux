import React from "react";
import { PropTypes } from "prop-types";
import { FaPlusCircle, FaTrashAlt, FaEdit } from "react-icons/fa";
import PopupModalForm from "../common/PopupForm";
import TextInput from "../common/TextInput";

const ProjectSection = ({ value, onChange, ...props }) => {
  return (
    <div className="col-3" style={{ textAlign: "left" }}>
      <PopupModalForm {...props} title="Add New Project" buttonTitle="Save">
        <TextInput
          name="projectInput"
          value={value}
          onChange={onChange}
          placeHolder="Add a Project"
        />
      </PopupModalForm>

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
          props.projects.map((project) => (
            <a
              className="list-group-item list-group-item-action d-flex justify-content-between shadow-none"
              style={{ fontSize: "15px" }}
              key={project._id}
            >
              {project.name}

              <div
                className="d-flex ml-1"
                style={{ fontSize: "16px", height: "auto" }}
              >
                <button
                  className="btn btn-sm shadow-none"
                  onClick={() => props.onDelete(project)}
                >
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
  onDelete: PropTypes.func.isRequired,
};

export default ProjectSection;
