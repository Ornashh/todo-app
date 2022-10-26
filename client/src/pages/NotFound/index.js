import React from "react";

import s from "./notfound.module.scss";

const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        <div>404</div>
        <div>
          Page <span>not found</span>.
        </div>
      </h1>
    </div>
  );
};

export default NotFound;
