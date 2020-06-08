import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const btnStyle = {
    marginLeft: ".5rem",
  };
  return (
    <div className="jumbotron">
      <h1>Stay Productive Application</h1>
      <p>Manage Your Tasks/ Projects</p>
      <Link to="/login" className="btn btn-primary btn-md">
        Login
      </Link>
      <Link to="/register" className="btn btn-primary btn-md" style={btnStyle}>
        Register
      </Link>
    </div>
  );
};

export default HomePage;
