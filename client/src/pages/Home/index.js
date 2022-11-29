import React from "react";
import { useTranslation } from "react-i18next";

import s from "./home.module.scss";
import { useAppContext } from "../../context";

const Home = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();

  return (
    <div className={s.home_outer}>
      <div className={s.home_inner}>
        <h1
          className={s.title}
          style={{
            fontSize:
              lang === "en"
                ? "clamp(50px, 9vw, 90px)"
                : "clamp(30px, 9vw, 90px)",
          }}
        >
          {t("Main title")}
        </h1>
      </div>
    </div>
  );
};

export default Home;
