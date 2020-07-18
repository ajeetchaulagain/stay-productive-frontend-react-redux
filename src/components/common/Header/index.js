import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Layout, Row, Col } from "antd";
import HeaderMenu from "./HeaderMenu";
import styled from "styled-components";

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  color: green;
  h3 {
    color: white;
    font-size: 20px;
  }
`;

const Header = () => {
  return (
    <StyledHeader theme="light">
      <Row justify="space-between">
        <Col className="logo">
          <h3>Stay Productive</h3>
        </Col>
        <Col className="menu">
          <HeaderMenu />
        </Col>
      </Row>
    </StyledHeader>
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
