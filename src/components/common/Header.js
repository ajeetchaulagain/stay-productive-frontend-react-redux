import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Header = ({ user }) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="./src/favicon.ico" width="30" height="30" alt="" />
          {"  "}
          StayProductive
        </NavLink>
        <div className="navbar-nav align-items-center">
          <React.Fragment>
            <NavLink to="/dashboard" exact className="nav-item nav-link">
              Dashboard
            </NavLink>
            <NavLink to="/about" exact className="nav-item nav-link ">
              About
            </NavLink>
            <NavLink to="/logout" exact className="nav-item nav-link ">
              Logout
            </NavLink>
            <li>{user.name}</li>
          </React.Fragment>
          <NavLink to="/Login" exact className="nav-item nav-link ">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
