import React from "react";
import { Result } from "antd";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<NavLink to="/">Back Home</NavLink>}
      />
    </div>
  );
};

export default PageNotFound;
