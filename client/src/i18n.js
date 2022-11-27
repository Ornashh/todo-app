import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Main title": "Stay organized and manage your tasks easily.",
      Tasks: "Tasks",
      Date: "Today",
      "Page not found": "Page not found.",
      Auth: {
        "Sign in": "Sign in",
        "Sign up": "Sign up",
        "Sign up v2": "Sign up",
        "Sign out": "Sign out",
        "No account": "Don't have an account?",
        "Have an account": "Have an account?",
        "First name": "First name",
        "Last name": "Last name",
        Username: "Username",
        Password: "Password",
      },
      Task: {
        Add: "Add task",
        Edit: "Edit",
        Delete: "Delete",
      },
      Modal: {
        "Modal title edit": "Edit",
        "Modal title delete": "Delete",
        "Delete message": "Are you sure you want to delete?",
        Title: "Title",
        Desc: "Description",
        Save: "Save",
        Delete: "Delete",
        Cancel: "Cancel",
      },
      Alert: {
        "Enter a task": "Enter a task",
        "Task updated": "Task updated",
        "Task deleted": "Task deleted",
      },
    },
  },
  ru: {
    translation: {
      "Main title":
        "Оставайся организованным и легко управляй своими задачами.",
      Tasks: "Задачи",
      Date: "Сегодня",
      "Page not found": "Страница не найдена.",
      Auth: {
        "Sign in": "Войти",
        "Sign up": "Зарегистрироваться",
        "Sign up v2": "Регистрация",
        "Sign out": "Выйти",
        "No account": "Нет аккаунта?",
        "Have an account": "Есть аккаунт?",
        "First name": "Имя",
        "Last name": "Фамилия",
        Username: "Имя пользователя",
        Password: "Пароль",
      },
      Task: {
        Add: "Добавить задачу",
        Edit: "Редактировать",
        Delete: "Удалить",
      },
      Modal: {
        "Modal title edit": "Редактировать",
        "Modal title delete": "Удалить",
        "Delete message": "Вы уверены что хотите удалить?",
        Title: "Название",
        Desc: "Описание",
        Save: "Сохранить",
        Delete: "Удалить",
        Cancel: "Отмена",
      },
      Alert: {
        "Enter a task": "Введите задачу",
        "Task updated": "Задача обновлена",
        "Task deleted": "Задача удалена",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
