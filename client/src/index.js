import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";

import "./assets/styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import AppContextProvider from "./context";
import Modal from "./ui/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
        <Modal />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
