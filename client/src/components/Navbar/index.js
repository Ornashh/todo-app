import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import s from "./styles.module.scss";

import { useAppContext } from "../../context";
import Icon from "../../ui/Icon";
import Dropdown from "../../ui/Dropdown";
import RenderIf from "../../utils/renderIf";

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { isAuth, theme, handleTheme, lang, handleLang } =
    useAppContext();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const handleTasks = () => {
    navigate("/tasks");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className={s.navbar_outer}>
      <div className={s.navbar_container}>
        <div className={s.navbar_inner}>
          <Link to="/" className={s.logo}>
            TODOLi
          </Link>
          <div className={s.actions}>
            <div className={s.items}>
              <Dropdown icon="language">
                <button
                  onClick={() => handleLang("en")}
                  disabled={lang === "en"}
                >
                  English
                </button>
                <button
                  onClick={() => handleLang("ru")}
                  disabled={lang === "ru"}
                >
                  Русский
                </button>
              </Dropdown>
              <button onClick={handleTheme} className={s.theme_button}>
                <Icon name={theme === "dark" ? "dark" : "light"} />
              </button>
            </div>
            <RenderIf isTrue={isAuth}>
              <Dropdown icon="user">
                <button onClick={handleTasks}>
                  <Icon name="tasks" />
                  <div>{t("Tasks")}</div>
                </button>
                <button onClick={handleLogout}>
                  <Icon name="logout" />
                  <div>{t("Auth.Sign out")}</div>
                </button>
              </Dropdown>
            </RenderIf>
            <RenderIf isTrue={!isAuth}>
              <Link to="sign_in" className={s.sign_in_link}>
                {t("Auth.Sign in")}
              </Link>
            </RenderIf>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
