import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import { fb_config } from "./app/constants/fb-config";
import App from "./app/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

firebase.initializeApp(fb_config);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
