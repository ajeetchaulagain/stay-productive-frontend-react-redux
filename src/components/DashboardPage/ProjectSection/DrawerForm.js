import React from "react";
import { Drawer, Form, Input, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { PropTypes } from "prop-types";

import { InputErrorWrapper } from "./StyledComponents";

const DrawerForm = ({
  title,
  isFetching,
  project,
  handleDrawerClose,
  drawerVisible,
  handleChange,
  handleSubmit,
  inputError,
  buttonText,
}) => {
  console.log("DrawerForm Component");
  return (
    <Drawer
      title={title}
      placement="left"
      width={280}
      closable={false}
      onClose={handleDrawerClose}
      visible={drawerVisible}
      key="left"
    >
      <form onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            placeholder="Enter Project Name"
            onChange={handleChange}
            name="name"
            value={project.name}
          />
          {inputError && <InputErrorWrapper>{inputError}</InputErrorWrapper>}
        </Form.Item>

        <Button onClick={handleDrawerClose}>Cancel</Button>

        <Button
          onClick={handleSubmit}
          type="primary"
          style={{ marginLeft: "5px" }}
        >
          {isFetching ? (
            <React.Fragment>
              <LoadingOutlined style={{ color: "#fff" }} /> Saving
            </React.Fragment>
          ) : (
            <React.Fragment>{buttonText}</React.Fragment>
          )}
        </Button>
      </form>
    </Drawer>
  );
};

DrawerForm.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  project: PropTypes.object,
  handleDrawerClose: PropTypes.func.isRequired,
  drawerVisible: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputError: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default DrawerForm;
