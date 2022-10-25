import React, { useState } from "react";

import s from "./delete.module.scss";
import Button from "../../../ui/Button";
import { useAppContext } from "../../../context";
import { deleteTask } from "../../../api";
import { toast } from "react-toastify";
import settings from "../../../utils/toastSettings";

const DeleteModal = () => {
  const { modalProps, closeModal } = useAppContext();
  const { data } = modalProps;

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deleteTask(data._id)
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

  return (
    <div>
      <div className={s.text}>Are you sure you want to delete?</div>
      <div className={s.buttons}>
        <Button secondary onClick={closeModal}>
          Cancel
        </Button>
        <Button disabled={isLoading} onClick={handleDelete}>
          {isLoading ? "Loading..." : "Delete"}
        </Button>
      </div>
    </div>
  );
};

export default DeleteModal;
