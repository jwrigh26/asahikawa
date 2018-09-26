import React from "react";
import ReactDOM from "react-dom";
import "styles/index.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import createBrowserHistory from "history/createBrowserHistory";
import { Router } from "react-router";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
