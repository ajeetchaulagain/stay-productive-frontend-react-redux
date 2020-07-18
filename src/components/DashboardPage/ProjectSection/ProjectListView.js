import React from "react";
import { Tooltip, Divider } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { ListWrapper } from "./StyledComponents";
import { PropTypes } from "prop-types";

const ProjectListView = ({ projects, handleDelete, handleUpdate }) => {
  return (
    <ListWrapper>
      <Divider orientation="center">Projects</Divider>
      {projects.map((project) => (
        <a key={project._id}>
          <li>
            <span>{project.name}</span>
            <span style={{ fontSize: "16px" }}>
              <Tooltip placement="top" title="Edit">
                <EditTwoTone
                  twoToneColor="#7abb30"
                  onClick={() => handleUpdate(project)}
                />
              </Tooltip>
              &nbsp; &nbsp;
              <Tooltip placement="top" title="Delete">
                <DeleteTwoTone
                  twoToneColor="red"
                  onClick={() => handleDelete(project)}
                />
              </Tooltip>
            </span>
          </li>
        </a>
      ))}
    </ListWrapper>
  );
};

ProjectListView.propTypes = {
  projects: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default ProjectListView;
