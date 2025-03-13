import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import router from "./Routes/routesConfig"; // 🚀 Importando as rotas

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* 🚀 Carregando o roteador externo */}
  </React.StrictMode>
);

reportWebVitals();
