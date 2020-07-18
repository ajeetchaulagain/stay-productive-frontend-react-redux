import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "antd/dist/antd.css";

import AboutPage from "./AboutPage/AboutPage";
import Header from "../components/common/Header";
import PageNotFound from "./PageNotFound";
import DashboardPage from "./DashboardPage";
import Footer from "./common/Footer";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";

const ContentWrapper = styled.div`
  background-color: #ececec;
  padding: 30px 20px;
  margin: 0 auto;
`;

const App = () => {
  console.log("APP COMPONENT----------");

  return (
    <React.Fragment>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route path="/dashboard" exact component={DashboardPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/" exact component={HomePage}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </ContentWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default App;
