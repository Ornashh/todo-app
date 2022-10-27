import React, { useState } from "react";
import { toast } from "react-toastify";
import _ from "lodash";

import s from "./edit.module.scss";

import { useAppContext } from "../../../context";
import { updateTask } from "../../../api";
import Button from "../../../ui/Button";
import TextField from "../../../ui/TextField";
import settings from "../../../utils/toastSettings";

const EditModal = () => {
  const { modalProps, closeModal } = useAppContext();
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
        toast.success(res.message, settings);
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
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          value={updateState.title}
          handleChange={handleChange}
        />
        <TextField
          name="desc"
          label="Description"
          value={updateState.desc || ""}
          handleChange={handleChange}
        />
        <div className={s.buttons}>
          <Button secondary onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit" disabled={disabledButton}>
            {isLoading ? "Loading..." : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
