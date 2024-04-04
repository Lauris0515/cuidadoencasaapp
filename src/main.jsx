import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Formulario } from "./Formulario/Formulario";
import { Home } from "./Home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);
