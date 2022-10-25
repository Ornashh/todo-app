import React, { useState } from "react";
import { toast } from "react-toastify";

import s from "./form.module.scss";

import { createTask } from "../../api";
import Icon from "../Icon";
import settings from "../../utils/toastSettings";

const Form = ({ setTasks }) => {
  const [state, setState] = useState({ title: "" });
  const [isDisableForm, setIsDisableForm] = useState(false);

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (state.title) {
      setIsDisableForm(true);
      createTask(state)
        .then((res) => {
          setTasks(res.data.todos);
          toast.success("Task added", settings);
          setState({ title: "" });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsDisableForm(false);
        });
    } else {
      toast.info("Enter a task", settings);
    }
  };

  return (
    <form className={s.form} onSubmit={handleAddTask}>
      <button
        type="submit"
        disabled={isDisableForm}
        className={s.icon_button}
        onClick={handleAddTask}
      >
        <Icon name="add" />
      </button>
      <input
        name="title"
        type="text"
        disabled={isDisableForm}
        placeholder="Add task"
        value={state.title || ""}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
