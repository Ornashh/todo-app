import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import s from "./styles.module.scss";

import { useAppContext } from "../../context";
import { getTasks } from "../../api";
import Form from "../../components/Form";
import Task from "../../components/Task";
import Loader from "../../ui/Loader";
import Icon from "../../ui/Icon";
import RenderIf from "../../utils/RenderIf";
import PageTitle from "../../utils/PageTitle";

const Tasks = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [animation, setAnimation] = useState(s.hide_completed);

  const uncompletedTasks = tasks.filter((task) => task.isCompleted === false);
  const completedTasks = tasks.filter((task) => task.isCompleted === true);

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

  const handleToggle = async () => {
    setAnimation(isCompleted ? s.hide_completed : s.show_completed);
    await new Promise((resp) => setTimeout(resp, 90));
    setIsCompleted(!isCompleted);
  };

  return (
    <PageTitle title="Tasks">
      <div className={s.tasks_container}>
        <div className={s.tasks_content}>
          <div className={s.tasks_header}>
            <div className={s.date}>
              <h2>{t("Date")}</h2>
              <p>{currentDate}</p>
            </div>
          </div>

          <Form setTasks={setTasks} />

          <Loader loading={isLoading}>
            <RenderIf isTrue={uncompletedTasks.length}>
              <div
                style={completedTasks.length > 0 ? { marginBottom: 15 } : null}
              >
                {uncompletedTasks?.map((task) => (
                  <Task
                    key={task._id}
                    {...task}
                    task={task}
                    setTasks={setTasks}
                  />
                ))}
              </div>
            </RenderIf>
            <RenderIf isTrue={completedTasks.length > 0}>
              <div className={s.completed_task}>
                <button
                  onClick={handleToggle}
                  className={isCompleted ? s.completed_active : ""}
                >
                  <Icon name="arrowRight" />
                  <div>
                    {t("Completed")} ({completedTasks.length})
                  </div>
                </button>
              </div>
              <RenderIf isTrue={isCompleted}>
                <div className={animation}>
                  {completedTasks?.map((task) => {
                    return (
                      <Task key={task._id} {...task} setTasks={setTasks} />
                    );
                  })}
                </div>
              </RenderIf>
            </RenderIf>
          </Loader>
        </div>
      </div>
    </PageTitle>
  );
};

export default Tasks;
