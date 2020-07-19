import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Button, Modal, Input, Tooltip } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import {
  ProjectSectionWrapper,
  ProjectSectionHeaderWrapper as Header,
} from "./StyledComponents";

import ProjectListView from "./ProjectListView";
import DrawerForm from "./DrawerForm";

import { validateProjectInput } from "../../../util/inputValidator";

const { confirm } = Modal;
const { Search } = Input;

const ProjectSection = ({ ...props }) => {
  const { isFetching, onSave, onDelete, onUpdate, projects } = props;

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [project, setProject] = useState({});
  const [inputError, setInputError] = useState("");
  const [isUpdate, setIsUpdate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Checking the status of isFetching
  useEffect(() => {
    console.log("Use Effect hook", isFetching);
    if (!isFetching) {
      setDrawerVisible(false);
    }
  }, [isFetching]);

  // onChange Handler for input
  const handleChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
    setInputError("");
  };

  // onSubmit Handler for both update and create
  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = validateProjectInput(project);
    console.log("Project in handleSubmit", project);
    console.log("Handle Submit");

    if (error) {
      setInputError(error.details[0].message);
      console.log("inputError-", inputError);
      console.log(error.details);
      return;
    }
    // Sending API Request
    // Need to check condition here if its a update or new add
    if (!isUpdate) {
      onSave(project);
    } else {
      console.log("Submit is for update");
      onUpdate(project);
      setDrawerVisible(false);
    }

    setProject({});
  };

  //delete handler with confirmation
  const handleDelete = (project) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: `"${project.name}" will be deleted with all its associated task`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        onDelete(project);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // handler for showing add drawer
  const handleAddDrawer = () => {
    setIsUpdate(false);
    setDrawerVisible(true);
  };

  // handler for closing drawer
  const handleDrawerClose = () => {
    setInputError("");
    setProject({});
    setDrawerVisible(false);
  };

  //handler for showing update drawer
  const handleUpdateDrawer = (project) => {
    console.log("Project to update-", project.name);
    console.log("Project id to update-", project._id);
    setIsUpdate(true);
    setProject({ name: project.name, _id: project._id });
    setDrawerVisible(true);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const drawerConfig = {
    title: isUpdate ? "Update a Project" : "Add a Project",
    buttonText: isUpdate ? "Update" : "Save",
  };

  return (
    <ProjectSectionWrapper>
      <Header>
        <Input placeholder="Search Project" onChange={handleSearch} />
        <Tooltip title="Add Project">
          <Button type="primary" onClick={handleAddDrawer}>
            Add a Project
          </Button>
        </Tooltip>
      </Header>

      <ProjectListView
        projects={projects}
        handleUpdate={handleUpdateDrawer}
        handleDelete={handleDelete}
      />

      <DrawerForm
        handleDrawerClose={handleDrawerClose}
        handleChange={handleChange}
        drawerVisible={drawerVisible}
        handleSubmit={handleSubmit}
        project={project}
        title={drawerConfig.title}
        inputError={inputError}
        isFetching={isFetching}
        buttonText={drawerConfig.buttonText}
      />
    </ProjectSectionWrapper>
  );
};

ProjectSection.propTypes = {
  projects: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ProjectSection;
