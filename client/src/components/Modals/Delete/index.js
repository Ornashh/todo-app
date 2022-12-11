import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import s from "./styles.module.scss";

import { useAppContext } from "../../../context";
import { deleteTask } from "../../../api";
import Button from "../../../ui/Button";
import Settings from "../../../utils/Settings";

const Delete = () => {
  const { t } = useTranslation();
  const { modalProps, closeModal, theme } = useAppContext();
  const { data } = modalProps;

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deleteTask(data._id)
      .then((res) => {
        data.setTasks(res.data.todos);
        toast.success(t("Alert.Task deleted"), Settings(theme));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        closeModal();
      });
  };

  return (
    <div className={s.content}>
      <div className={s.text}>{t("Modal.Delete message")}</div>
      <div className={s.buttons}>
        <Button secondary onClick={closeModal}>
          {t("Modal.Cancel")}
        </Button>
        <Button disabled={isLoading} onClick={handleDelete} loading={isLoading}>
          {t("Modal.Delete")}
        </Button>
      </div>
    </div>
  );
};

export default Delete;
