import React from "react";

import s from "./notfound.module.scss";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        <div>404</div>
        <div>{t("Page not found")}</div>
      </h1>
    </div>
  );
};

export default NotFound;
