import React from "react";

const ProjectList = () => {
  return (
    <div className="col-3" style={{ textAlign: "left" }}>
      <div className="list-group h-50">
        <li className="list-group-item font-weight-bold bg-dark text-light">
          Projects
        </li>
        <a
          href="#"
          className="list-group-item list-group-item-action  d-flex justify-content-between align-items-center"
        >
          Stay Productive API Node{" "}
          <span
            className="btn btn-primary"
            data-toggle="tooltip"
            data-placement="top"
            title="Tooltip on top"
          >
            14
          </span>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex 
              justify-content-between align-items-center"
        >
          Stay Productive Front End{" "}
          <span className="badge badge-primary badge-pill">
            <i className="far fa-edit"></i>
          </span>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          XML Keyword Search System Developed by Ajeet Chaulagain{" "}
          <span className="badge badge-primary badge-pill">
            <i className="far fa-edit"></i>
          </span>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          Third item{" "}
          <span className="badge badge-primary badge-pill">
            <i className="far fa-edit"></i>
          </span>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          Third item{" "}
          <span className="badge badge-primary badge-pill">
            <i className="far fa-edit"></i>
          </span>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          Third item{" "}
          <span className="badge badge-primary badge-pill">
            <i className="far fa-edit"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
