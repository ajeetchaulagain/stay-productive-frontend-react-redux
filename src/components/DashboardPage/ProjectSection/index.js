import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import Joi from "@hapi/joi";

import { Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { ProjectSectionWrapper } from "./StyledComponents";
import ProjectListView from "./ProjectListView";
import DrawerForm from "./DrawerForm";

const { confirm } = Modal;

const ProjectSection = ({ ...props }) => {
  // State Hooks
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [project, setProject] = useState({});
  const [inputError, setInputError] = useState("");

  // onChange Handler
  const handleChange = (event) => {
    setProject({
      [event.target.name]: event.target.value,
    });
    setInputError("");
  };

  // Input Validator
  const validateInput = (data) => {
    const schema = Joi.object({
      name: Joi.string().required().min(5).max(20),
    });
    return schema.validate(data, { abortEarly: true });
  };

  // onSubmit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = validateInput(project);
    console.log("Handle Submit");
    if (error) {
      setInputError(error.details[0].message);
      console.log("inputError-", inputError);
      return;
    }
    // Sending API Request
    // Need to check condition here if its a update or new add
    props.onSave(project);
    setProject({});
  };

  //delete handler with confirmation
  const handleDelete = (project) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: `${project.name} will be deleted with all its associated task`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        props.onDelete(project);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // Checking the status of isFetching
  useEffect(() => {
    console.log("Use Effect hook", props.isFetching);
    if (!props.isFetching) {
      setDrawerVisible(false);
    }
  }, [props.isFetching]);

  // handler for showing Drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // handler for closing Drawer
  const handleDrawerClose = () => {
    setProject({});
    setDrawerVisible(false);
  };

  const handleUpdate = (project) => {
    console.log("Project to update-", project.name);
    setProject(project);
    setDrawerVisible(true);
  };

  return (
    <ProjectSectionWrapper>
      <h2>Projects</h2>
      <Button type="primary" width="100%" onClick={showDrawer}>
        Add a Project
      </Button>

      <ProjectListView
        projects={props.projects}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />

      <DrawerForm
        handleDrawerClose={handleDrawerClose}
        handleChange={handleChange}
        drawerVisible={drawerVisible}
        handleSubmit={handleSubmit}
        project={project}
        inputError={inputError}
        isFetching={props.isFetching}
      />
    </ProjectSectionWrapper>
  );
};

ProjectSection.propTypes = {
  projects: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProjectSection;
