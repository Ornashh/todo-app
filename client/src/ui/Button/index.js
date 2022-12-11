import React from "react";
import clsx from "clsx";

import s from "./styles.module.scss";

const Loading = () => <div className={s.loader} />;

const Button = (props) => {
  const {
    type = "button",
    children,
    secondary,
    fullWidth,
    disabled,
    onClick,
    loading = false,
  } = props;

  return (
    <button
      type={type}
      className={clsx(s.button, {
        [s.secondary_color]: secondary,
        [s.full_width]: fullWidth,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <Loading /> : children}
    </button>
  );
};

export default Button;
