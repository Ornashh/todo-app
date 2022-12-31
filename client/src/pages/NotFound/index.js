import React from "react";
import { useTranslation } from "react-i18next";

import s from "./styles.module.scss";
import PageTitle from "../../utils/pageTitle";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <PageTitle title="404">
      <div className={s.wrapper}>
        <h1 className={s.title}>
          <div>404</div>
          <div>{t("Page not found")}</div>
        </h1>
      </div>
    </PageTitle>
  );
};

export default NotFound;
