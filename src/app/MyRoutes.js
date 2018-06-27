import React from "react";
import { Route } from "react-router-dom";

import * as routes from "./constants/routes";
import Landing from "./view/Landing";
import Login from "./view/Login";
import Home from "./view/Home";
import Admin from "./view/Admin";

const MyRoutes = () => {
  return (
    <div>
      <Route exact path={routes.LANDING} component={Landing} />
      <Route exact path={routes.LOGIN} component={Login} />
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.Admin} component={Admin} />
    </div>
  );
};

export default MyRoutes;
