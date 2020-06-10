import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="./src/favicon.ico" width="30" height="30" alt="" />
          {"  "}
          StayProductive
        </NavLink>
        <div className="navbar-nav align-items-center">
          <NavLink to="/" exact className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink to="/dashboard" exact className="nav-item nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/about" exact className="nav-item nav-link ">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
