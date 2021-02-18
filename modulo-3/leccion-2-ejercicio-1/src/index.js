import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.scss";
import App from "./components/App";
import "./components/MediaCard.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
