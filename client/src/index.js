import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";

import "./assets/styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import AppContextProvider from "./context";
import Modal from "./ui/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
      <Modal />
    </AppContextProvider>
  </React.StrictMode>
);
