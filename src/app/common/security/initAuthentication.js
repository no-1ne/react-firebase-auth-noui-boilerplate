import React from "react";
import * as firebase from "firebase";

import AuthUserContext from "./AuthUserContext";
import { USER_AUTHORIZATION } from "../../constants/firestoreRef";

const initAuthentication = Component =>
  class InitAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
        authorization: ""
      };
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged(authUser => {
        if (authUser && authUser.uid) {
          this.colRef = firebase.firestore().collection(USER_AUTHORIZATION);
          this.colRef
            .doc(authUser.uid)
            .get()
            .then(val => {
              if (val.exists) {
                var authorization = val.data().user_type;
                this.setState({ authorization });
              }
            });
        }
        this.setState({ authUser });
      });
    }

    render() {
      const { authUser, authorization } = this.state;
      return (
        <AuthUserContext.Provider
          value={{
            authUser,
            authorization
          }}
        >
          <Component />
        </AuthUserContext.Provider>
      );
    }
  };

export default initAuthentication;
