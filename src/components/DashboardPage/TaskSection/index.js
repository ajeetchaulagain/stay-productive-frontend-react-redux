import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";

import { Input, Button, List, Popconfirm, message, DatePicker } from "antd";

import {
  UserOutlined,
  EditTwoTone,
  DeleteTwoTone,
  PlayCircleTwoTone,
} from "@ant-design/icons";

const { Search } = Input;

const TaskSectionWrapper = styled.div`
  padding: 3rem 2rem;
  background-color: white;
  border-radius: 3px;
  min-height: 90vh;
`;

const ListWrapper = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`;

const TaskSection = (props) => {
  function confirm(e) {
    console.log(e);
    message.success({
      content: "This is a prompt message with custom className and style",
      className: "custom-class",
      style: {
        marginTop: "5vh",
      },
    });
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

  const dateFormat = "DD MMM, YYYY";

  console.log("TaskSection COMPONENT--------");
  return (
    <TaskSectionWrapper>
      <div className="task-form-wrapper">
        <form onSubmit={props.onSubmit}>
          <Input
            size="large"
            placeholder="Enter a task"
            onChange={props.onChange}
            suffix={<UserOutlined />}
            value={props.value}
          />
        </form>
      </div>
      <br />
      <br />
      <div className="task-settings">
        <Search
          placeholder="Search a Task"
          onSearch={(value) => console.log(value)}
          style={{ width: 300 }}
        />
        &nbsp; <Button type="secondary">Show Completed Tasks</Button>
        &nbsp; <Button type="primary">Show All Tasks</Button>
      </div>
      <br />

      <div className="task-list">
        <List
          size="small"
          bordered
          dataSource={props.tasks}
          renderItem={(item) => (
            <ListWrapper>
              <span>
                <PlayCircleTwoTone /> &nbsp;{item.title}
              </span>
              <span>
                <DatePicker
                  defaultValue={moment("2015/01/01", dateFormat)}
                  format={dateFormat}
                />
                &nbsp; &nbsp;
                <EditTwoTone twoToneColor="#178396" />
                &nbsp;
                <Popconfirm
                  title="Delete this task?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteTwoTone twoToneColor="#9e2f2b" />
                </Popconfirm>
              </span>
            </ListWrapper>
          )}
        />
      </div>
    </TaskSectionWrapper>
  );
};

TaskSection.propTypes = {
  tasks: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TaskSection;
