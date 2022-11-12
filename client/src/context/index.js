import React, { createContext, useContext, useEffect, useState } from "react";
import useResize from "../hooks/useResize";

const AppContext = createContext(null);
const themeLocalStorage = localStorage.getItem("theme") || "dark";

const AppContextProvider = ({ children }) => {
  const userAuth = JSON.parse(localStorage.getItem("user"));
  const [isAuth, setIsAuth] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [modalProps, setModalProps] = useState({
    open: false,
    title: "",
    type: "",
    data: {},
  });
  const [theme, setTheme] = useState(themeLocalStorage);
  const resize = useResize(768);

  useEffect(() => {
    if (userAuth) {
      setIsAuth(true);
    }
  }, [userAuth]);

  useEffect(() => {
    if (resize) {
      setIsOpenMenu(false);
    }
  }, [resize]);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

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

  useEffect(() => {
    if (theme === "light") {
      document.querySelector("html").setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.querySelector("html").removeAttribute("data-theme", "light");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        modalProps,
        openModal,
        closeModal,
        isOpenMenu,
        handleToggleMenu,
        theme,
        handleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
