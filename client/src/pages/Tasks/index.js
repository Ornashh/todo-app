import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import s from "./tasks.module.scss";

import { useAppContext } from "../../context";
import { getTasks } from "../../api";
import PageLayout from "../../components/PageLayout";
import Form from "../../components/Form";
import Task from "../../components/Task";
import Loader from "../../ui/Loader";

const Tasks = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const currentDate = new Date().toLocaleDateString(
    lang === "en" ? "en-GB" : "ru-RU",
    options
  );

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
      <div className={s.tasks_wrapper}>
        <div className={s.tasks_content}>
          <div className={s.tasks_header}>
            <div className={s.date}>
              <h2>{t("Date")}</h2>
              <p>{currentDate}</p>
            </div>
          </div>
          <Form setTasks={setTasks} />
          <Loader loading={isLoading}>
            <div>
              {tasks?.map((task) => {
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
