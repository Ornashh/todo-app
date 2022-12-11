import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import s from "./styles.module.scss";

import { useAppContext } from "../../context";
import Icon from "../../ui/Icon";
import useClickAway from "../../hooks/useClickAway";
import Portal from "../../utils/Portal";
import Delete from "../../components/Modals/Delete";
import Edit from "../../components/Modals/Edit";
import RenderIf from "../../utils/RenderIf";

const Modals = {
  deleteModal: <Delete />,
  editModal: <Edit />,
};

const Modal = () => {
  const modal = useRef(null);
  const [animation, setAnimation] = useState("hideContent");
  const { modalProps, closeModal } = useAppContext();
  const ModalInner = () => Modals[modalProps.type];

  useClickAway(modal, () => {
    setAnimation("hideContent");

    setTimeout(() => {
      closeModal();
    }, 90);
  });

  const handleClose = async () => {
    setAnimation("hideContent");
    await new Promise((resp) => setTimeout(resp, 90));
    closeModal();
  };

  useEffect(() => {
    if (modalProps.open) {
      setAnimation("showContent");
    }
  }, [modalProps.open]);

  if (!modalProps.open) return null;

  return (
    <Portal>
      <div className={s.modal_outer}>
        <div ref={modal} className={clsx(s.modal_inner, animation)}>
          <div
            className={s.modal_header}
            style={!modalProps.title ? { justifyContent: "flex-end" } : null}
          >
            <RenderIf isTrue={modalProps.title}>
              <div className={s.modal_title}>{modalProps.title}</div>
            </RenderIf>
            <button onClick={handleClose}>
              <Icon name="close" />
            </button>
          </div>
          <RenderIf isTrue={modalProps.type}>
            <div className={s.modal_content}>
              <ModalInner />
            </div>
          </RenderIf>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
