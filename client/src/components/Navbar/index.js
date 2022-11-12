import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import s from "./navbar.module.scss";

import { useAppContext } from "../../context";
import Icon from "../Icon";
import Dropdown from "../../ui/Dropdown";
import RenderIf from "../../utils/RenderIf";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, isOpenMenu, handleToggleMenu, theme, handleTheme } =
    useAppContext();
  const location = useLocation();
  const path = location.pathname;

  const handleTasks = () => {
    navigate("/tasks");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className={s.navbar_outer}>
      <div className={s.navbar_inner}>
        <RenderIf isTrue={isAuth && path === "/tasks"}>
          <button className={s.menu} onClick={handleToggleMenu}>
            <Icon name={isOpenMenu ? "close" : "menu"} />
          </button>
        </RenderIf>
        <Link to="/" className={s.logo}>
          TODOLi
        </Link>
        {isAuth ? (
          <Dropdown icon="user">
            <button onClick={handleTasks}>
              <Icon name="tasks" />
              <div>My tasks</div>
            </button>
            <button onClick={handleTheme}>
              <Icon name={theme === "dark" ? "dark" : "light"} />
              <div>{theme === "dark" ? "Dark" : "Light"} theme</div>
            </button>
            <button onClick={handleLogout}>
              <Icon name="logout" />
              <div>Log out</div>
            </button>
          </Dropdown>
        ) : (
          <div className={s.action}>
            <Link to="sign_in">Sign in</Link>
            <button onClick={handleTheme}>
              <Icon name={theme === "dark" ? "dark" : "light"} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
