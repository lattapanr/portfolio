/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "../src/components/Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Navbar />
  </React.StrictMode>
);
