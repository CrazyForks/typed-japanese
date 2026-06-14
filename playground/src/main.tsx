import React from "react";
import ReactDOM from "react-dom/client";
import "./monaco-setup"; // self-host Monaco + workers before anything renders
import App from "./App";
import "./theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
