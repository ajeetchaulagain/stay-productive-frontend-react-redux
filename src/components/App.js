import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import DashboardPage from "./dashboard/DashboardPage";
import Footer from "./common/Footer";
import RegisterPage from "./register/RegisterPage";
import LoginPage from "./login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <ToastContainer
          autoClose={2500}
          style={{ marginTop: "3rem", padding: "1rem" }}
        />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/dashboard" component={DashboardPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
