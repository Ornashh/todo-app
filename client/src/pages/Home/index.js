import React from "react";
import { useTranslation } from "react-i18next";

import s from "./home.module.scss";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={s.home_outer}>
      <div className={s.home_inner}>
        <h1 className={s.title}>{t("Main title")}</h1>
      </div>
    </div>
  );
};

export default Home;
