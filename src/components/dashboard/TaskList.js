import React from "react";

const TaskList = () => {
  return (
    <div className="col">
      <input
        className="form-control mb-4"
        id="tableSearch"
        type="text"
        placeholder="Type something to search list items"
      />
    </div>
  );
};

export default TaskList;
