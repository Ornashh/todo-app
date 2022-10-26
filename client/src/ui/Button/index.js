import React from "react";
import clsx from "clsx";

import s from "./button.module.scss";

const Button = (props) => {
  const {
    type = "button",
    children,
    secondary,
    fullWidth,
    disabled,
    onClick,
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
      {children}
    </button>
  );
};

export default Button;
