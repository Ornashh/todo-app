import React from "react";
import { useTranslation } from "react-i18next";

import s from "./styles.module.scss";
import PageTitle from "../../utils/pageTitle";

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageTitle title="Home">
      <div className={s.home_outer}>
        <div className={s.home_inner}>
          <h1 className={s.title}>{t("Main title")}</h1>
        </div>
      </div>
    </PageTitle>
  );
};

export default Home;
