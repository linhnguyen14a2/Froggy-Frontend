import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/global.css";
import {GoogleOAuthProvider} from "@react-oauth/google";

ReactDOM.render(
    <GoogleOAuthProvider clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>,
  document.getElementById("root")
);

reportWebVitals();
