import React from "react";

import s from "./styles.module.scss";
import RenderIf from "../../utils/renderIf";

const TextField = (props) => {
  const {
    label,
    name,
    type = "text",
    placeholder,
    requiredMark = false,
    errors,
    disabled = false,
    value = "",
    handleChange = () => {},
  } = props;

  return (
    <div className={s.textField}>
      <RenderIf isTrue={label}>
        <label className={!requiredMark ? s.not_required : ""}>{label}</label>
      </RenderIf>
      <div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={handleChange}
        />
        <RenderIf isTrue={errors}>
          <div className={s.error_message}>{errors}</div>
        </RenderIf>
      </div>
    </div>
  );
};

export default TextField;
