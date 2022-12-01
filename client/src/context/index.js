import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);
const themeLocalStorage = localStorage.getItem("theme");
const langLocalStorage = localStorage.getItem("lang");

const AppContextProvider = ({ children }) => {
  const userAuth = JSON.parse(localStorage.getItem("user"));
  const [isAuth, setIsAuth] = useState(false);
  const [modalProps, setModalProps] = useState({
    open: false,
    title: "",
    type: "",
    data: {},
  });
  const [theme, setTheme] = useState(themeLocalStorage || "dark");
  const [lang, setLang] = useState(langLocalStorage);

  useEffect(() => {
    if (userAuth) {
      setIsAuth(true);
    }
  }, [userAuth]);

  const openModal = ({ title = "", type = "", data = {} }) => {
    setModalProps({
      open: true,
      title: title,
      type: type,
      data: data,
    });
  };

  const closeModal = () => {
    setModalProps({ open: false, title: "", type: "", data: {} });
  };

  const handleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const handleLang = (lang) => {
    setLang(lang);
  };

  useEffect(() => {
    if (lang === "en") {
      localStorage.setItem("lang", "en");
    } else if (lang === "ru") {
      localStorage.setItem("lang", "ru");
    } else {
      localStorage.removeItem("lang");
    }
  }, [lang]);

  useEffect(() => {
    if (theme === "light") {
      document.querySelector("html").setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.querySelector("html").setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        modalProps,
        openModal,
        closeModal,
        theme,
        handleTheme,
        lang,
        handleLang,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
