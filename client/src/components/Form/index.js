import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import s from "./form.module.scss";

import { useAppContext } from "../../context";
import { createTask } from "../../api";
import Icon from "../../ui/Icon";
import Settings from "../../utils/Settings";

const Form = ({ setTasks }) => {
  const { t } = useTranslation();
  const { theme } = useAppContext();
  const [state, setState] = useState({ title: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (state.title) {
      setIsLoading(true);
      createTask(state)
        .then((res) => {
          setTasks(res.data.todos);
          setState({ title: "" });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      toast.info(t("Alert.Enter a task"), Settings(theme));
    }
  };

  return (
    <form className={s.form} onSubmit={handleAddTask}>
      <button
        type="submit"
        disabled={isLoading}
        className={s.icon_button}
        onClick={handleAddTask}
      >
        <Icon name="add" />
      </button>
      <input
        name="title"
        type="text"
        disabled={isLoading}
        placeholder={t("Task.Add")}
        value={state.title || ""}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
