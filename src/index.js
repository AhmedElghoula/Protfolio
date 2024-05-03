/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

render(<App></App>, document.getElementById("app"));
