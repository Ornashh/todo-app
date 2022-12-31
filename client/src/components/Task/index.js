import React, { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import s from "./styles.module.scss";

import { useAppContext } from "../../context";
import { updateTask } from "../../api";
import Icon from "../../ui/Icon";
import Dropdown from "../../ui/Dropdown";
import RenderIf from "../../utils/renderIf";

const Task = ({ _id, title, desc, isCompleted, setTasks }) => {
  const { t } = useTranslation();
  const { openModal } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    openModal({
      title: t("Modal.Modal title edit"),
      type: "editModal",
      data: { _id: _id, title: title, desc: desc || "", setTasks: setTasks },
    });
  };

  const handleDelete = () => {
    openModal({
      title: t("Modal.Modal title delete"),
      type: "deleteModal",
      data: {
        _id: _id,
        setTasks: setTasks,
      },
    });
  };

  const handleComplete = () => {
    setIsLoading(true);
    updateTask({ _id: _id, isCompleted: !isCompleted })
      .then((res) => {
        setTasks(res.data.todos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={s.task}>
      <button
        disabled={isLoading}
        className={s.icon_button}
        onClick={handleComplete}
      >
        <Icon name={isCompleted ? "checked" : "unchecked"} />
      </button>
      <div className={s.title_wrapper}>
        <div className={clsx(s.title, { [s.completed]: isCompleted })}>
          {title}
        </div>
        <RenderIf isTrue={desc}>
          <div className={clsx(s.desc, { [s.completed]: isCompleted })}>
            {desc}
          </div>
        </RenderIf>
      </div>
      <div className={s.dropdown_wrapper}>
        <Dropdown icon="dots">
          <button onClick={handleEdit}>
            <Icon name="edit" />
            <div>{t("Task.Edit")}</div>
          </button>
          <button onClick={handleDelete}>
            <Icon name="delete" />
            <div>{t("Task.Delete")}</div>
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Task;
