import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./hooks/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <React.StrictMode>  
    <App />
    </React.StrictMode>
  </Router>
);
