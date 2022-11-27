import React, { cloneElement, useRef, useState } from "react";

import s from "./dropdown.module.scss";

import Icon from "../../ui/Icon";
import useClickAway from "../../hooks/useClickAway";
import RenderIf from "../../utils/RenderIf";
import clsx from "clsx";

const Dropdown = ({ icon, primaryColor, children }) => {
  const dropdown = useRef(null);
  const [animation, setAnimation] = useState("hideContent");
  const [isOpen, setIsOpen] = useState(false);

  useClickAway(dropdown, () => {
    setAnimation("hideContent");

    setTimeout(() => {
      setIsOpen(false);
    }, 90);
  });

  const handleToggle = async () => {
    setAnimation(isOpen ? "hideContent" : "showContent");
    await new Promise((resp) => setTimeout(resp, 90));
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.dropdown_outer} ref={dropdown}>
      <button
        className={clsx(s.dropdown_button, { [s.primary]: primaryColor })}
        onClick={handleToggle}
      >
        <Icon name={icon ? icon : "dots"} />
      </button>
      <RenderIf isTrue={isOpen}>
        <div className={animation}>
          <div className={s.dropdown_inner}>
            <div className={s.content}>
              {children.map((el, i) => {
                return (
                  <React.Fragment key={i}>
                    {cloneElement(el, {
                      onClick: async () => {
                        el.props.onClick();
                        await handleToggle();
                      },
                    })}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </RenderIf>
    </div>
  );
};

export default Dropdown;
