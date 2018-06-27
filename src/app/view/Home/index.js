import React from "react";
import * as firebase from "firebase";
import { WithAuthentication } from "../../common/security/withAuthenticationAuthorization";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home view</h1>
      </div>
    );
  }
}

export default WithAuthentication(Home);
