import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Store } from "./Redux/CentralStore";

/*        *************   aws and graphql   ******************   */
//using amplify for user control
import Amplify from "aws-amplify";
import API from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";
import config from "./aws-exports";

API.configure(config);
PubSub.configure(config);
//config amplify
Amplify.configure(config);

/*        *************      ******************   */

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
