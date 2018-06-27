import React, { Component, Fragment } from "react";

import MyRoutes from "./MyRoutes";

import initAuthentication from "./common/security/initAuthentication";
import NavBar from "./view/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <MyRoutes />
        </Fragment>
      </Router>
    );
  }
}

export default initAuthentication(App);
