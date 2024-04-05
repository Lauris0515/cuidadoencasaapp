import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Formulario } from "./Formulario/Formulario";
import { Home } from "./Home/Home";
import { Rutas } from "./Rutas/Rutas"

import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <BrowserRouter>
    <Rutas></Rutas>
   </BrowserRouter>
  </React.StrictMode>
);
