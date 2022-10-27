import React, { useState } from "react";
import clsx from "clsx";

import s from "./task.module.scss";

import { useAppContext } from "../../context";
import { updateTask } from "../../api";
import Icon from "../Icon";
import Dropdown from "../../ui/Dropdown";
import RenderIf from "../../utils/renderIf";

const Task = ({ _id, title, desc, isCompleted, setTasks }) => {
  const { openModal } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    openModal({
      title: "Edit",
      type: "editModal",
      data: {
        hello: "asd",
      },
      // data: { _id: _id, title: title, desc: desc || "", setTasks: setTasks },
    });
  };

  const handleDelete = () => {
    openModal({
      title: "Delete",
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
        <Dropdown>
          <button onClick={handleEdit}>
            <Icon name="edit" />
            <div>Edit task</div>
          </button>
          <button onClick={handleDelete}>
            <Icon name="delete" />
            <div>Delete task</div>
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Task;
