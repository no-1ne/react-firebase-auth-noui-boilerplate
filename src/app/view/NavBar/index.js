import React from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import AuthUserContext from "../../common/security/AuthUserContext";
import * as routes from "../../constants/routes";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {store => (store.authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.Admin}>Admin</Link>
    </li>
    <li>
      <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        Logout
      </button>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.LOGIN}>Login</Link>
    </li>
  </ul>
);

export default Navigation;
