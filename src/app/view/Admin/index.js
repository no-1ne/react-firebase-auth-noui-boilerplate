import React, { Component } from "react";

import { WithAuthorization } from "../../common/security/withAuthenticationAuthorization";

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>welcome admin</h1>
      </div>
    );
  }
}

var accessType = userType => (userType === "admin" ? true : false);

export default WithAuthorization(Admin, accessType);
