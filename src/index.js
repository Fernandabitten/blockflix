import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import BlockFlix from "../src/router/BlockFlix";
import { MyProvider } from "./context/context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <BlockFlix />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
