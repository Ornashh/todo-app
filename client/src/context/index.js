import React, { createContext, useContext, useEffect, useState } from "react";
import useResize from "../hooks/useResize";

const AppContext = createContext(null);

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

  const openModal = ({ title, type, data }) => {
    setModalProps({
      open: true,
      title: title,
      type: type,
      data: data,
    });
  };

  const closeModal = () => {
    setModalProps({ open: false });
  };

  return (
    <AppContext.Provider
      value={{
        isAuth,
        modalProps,
        openModal,
        closeModal,
        isOpenMenu,
        handleToggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
