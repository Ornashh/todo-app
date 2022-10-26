import React, { useEffect, useState } from "react";
import clsx from "clsx";

import s from "./tasks.module.scss";

import { useAppContext } from "../../context";
import { getTasks } from "../../api";
import PageLayout from "../../components/PageLayout";
import Form from "../../components/Form";
import Task from "../../components/Task";
import Loader from "../../ui/Loader";

const Tasks = () => {
  const { isOpenMenu, handleToggleMenu } = useAppContext();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const currentDate = new Date().toLocaleDateString("en-US", options);

  useEffect(() => {
    setIsLoading(true);
    getTasks()
      .then((res) => {
        setTasks(res.data.todos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <PageLayout title="Tasks">
      <div className={s.wrapper}>
        <div
          className={clsx(s.layout, { [s.show_layout]: isOpenMenu })}
          onClick={handleToggleMenu}
        />
        <div className={clsx(s.sidebar, { [s.toggle_menu]: isOpenMenu })}>
          <div className={s.sidebar_inner}>
            <button>Tasks</button>
          </div>
        </div>
        <div className={s.content}>
          <div className={s.header}>
            <div className={s.header_date}>
              <h2>Today</h2>
              <p>{currentDate}</p>
            </div>
          </div>
          <Form setTasks={setTasks} />
          <Loader loading={isLoading}>
            <div>
              {tasks.map((task) => {
                return <Task key={task._id} {...task} setTasks={setTasks} />;
              })}
            </div>
          </Loader>
        </div>
      </div>
    </PageLayout>
  );
};

export default Tasks;
