import React from "react";
import { Drawer, Form, Input, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { PropTypes } from "prop-types";

const DrawerForm = ({
  isFetching,
  project,
  handleDrawerClose,
  drawerVisible,
  handleChange,
  handleSubmit,
  inputError,
}) => {
  return (
    <Drawer
      title="Add Project"
      placement="left"
      width={280}
      closable={false}
      onClose={handleDrawerClose}
      visible={drawerVisible}
      key="left"
    >
      <form onSubmit={handleSubmit}>
        <Form.Item rules={[{ required: true, message: "Enter a proejct" }]}>
          <Input
            placeholder="Enter Project Name"
            onChange={handleChange}
            name="name"
            value={project.name}
          />
          {inputError && <span>{inputError}</span>}
        </Form.Item>
        <Button onClick={handleDrawerClose} style={{ marginRight: 8 }}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} type="primary">
          {isFetching ? (
            <span>
              <LoadingOutlined style={{ color: "white" }} /> Saving
            </span>
          ) : (
            <span>Save</span>
          )}
        </Button>
      </form>
    </Drawer>
  );
};

DrawerForm.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  project: PropTypes.array.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  drawerVisible: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputError: PropTypes.string.isRequired,
};
export default DrawerForm;
