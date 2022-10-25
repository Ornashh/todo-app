import React from "react";

import s from "./button.module.scss";
import clsx from "clsx";

const Button = (props) => {
  const {
    type = "button",
    children,
    secondary,
    fullWidth,
    small,
    disabled,
    onClick,
  } = props;

  return (
    <button
      type={type}
      className={clsx(s.button, {
        [s.secondary_color]: secondary,
        [s.full_width]: fullWidth,
        [s.button_small]: small,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
