import React, { useState } from "react";
import { toast } from "react-toastify";

import s from "./delete.module.scss";

import { useAppContext } from "../../../context";
import { deleteTask } from "../../../api";
import Button from "../../../ui/Button";
import Settings from "../../../utils/Settings";

const DeleteModal = () => {
  const { modalProps, closeModal, theme } = useAppContext();
  const { data } = modalProps;

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deleteTask(data._id)
      .then((res) => {
        data.setTasks(res.data.todos);
        toast.success(res.message, Settings(theme));
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
    <div>
      <div className={s.text}>Are you sure you want to delete?</div>
      <div className={s.buttons}>
        <Button secondary onClick={closeModal}>
          Cancel
        </Button>
        <Button disabled={isLoading} onClick={handleDelete} loading={isLoading}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteModal;
