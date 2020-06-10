import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import DashboardPage from "./dashboard/DashboardPage";
import Footer from "./common/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/dashboard" component={DashboardPage}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
