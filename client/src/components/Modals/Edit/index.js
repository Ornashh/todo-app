import React, { useState } from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import { useTranslation } from "react-i18next";

import s from "./styles.module.scss";

import { useAppContext } from "../../../context";
import { updateTask } from "../../../api";
import Button from "../../../ui/Button";
import TextField from "../../../ui/Textfield";
import Settings from "../../../utils/settings";
import { dateFormat } from "../../../utils/helpers";

const Edit = () => {
  const { t } = useTranslation();
  const { modalProps, closeModal, lang, theme } = useAppContext();
  const { data } = modalProps;

  const [updateState, setUpdateState] = useState({
    _id: data._id,
    title: data.title,
    desc: data.desc,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUpdateState({ ...updateState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    updateTask(updateState)
      .then((res) => {
        data.setTasks(res.data.todos);
        toast.success(t("Alert.Task updated"), Settings(theme));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        closeModal();
      });
  };

  const cloneDataForCompare = {
    _id: data._id,
    title: data.title,
    desc: data.desc,
  };

  const disabledButton =
    isLoading ||
    !updateState.title ||
    _.isEqual(cloneDataForCompare, updateState);

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField
        label={t("Modal.Date")}
        value={dateFormat(lang === "en" ? "en-GB" : "ru-RU", data?.date)}
        handleChange={handleChange}
        disabled
      />
      <TextField
        name="title"
        label={t("Modal.Title")}
        value={updateState.title}
        handleChange={handleChange}
      />
      <TextField
        name="desc"
        label={t("Modal.Desc")}
        value={updateState.desc || ""}
        handleChange={handleChange}
      />
      <div className={s.buttons}>
        <Button secondary onClick={closeModal}>
          {t("Modal.Cancel")}
        </Button>
        <Button type="submit" disabled={disabledButton} loading={isLoading}>
          {t("Modal.Save")}
        </Button>
      </div>
    </form>
  );
};

export default Edit;
