import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <img src="./src/favicon.ico" width="30" height="30" alt="" />
          {"  "}
          StayProductive
        </NavLink>
        <NavLink to="/" activeStyle={{ color: "#ff0055" }} exact>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle={{ color: "#ff0055" }} exact>
          About
        </NavLink>
        <NavLink to="/dashboard" activeStyle={{ color: "#ff0055" }} exact>
          Dashboard
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
