import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//Get the value of darkMode from localStorage and if true, add the calss of dark to the body.
const darkMode = JSON.parse(localStorage.getItem("darkMode"));
document.body.classList.toggle("dark", darkMode);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
