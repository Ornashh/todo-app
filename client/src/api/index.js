import instance from "../axios";

export const signUp = (data) => {
  return instance()
    .post("http://localhost:8000/api/user/sign_up", data)
    .then((res) => {
      return res;
    });
};

export const signIn = (data) => {
  return instance()
    .post("http://localhost:8000/api/user/sign_in", data)
    .then((res) => {
      return res;
    });
};

export const getTasks = () => {
  return instance()
    .get("http://localhost:8000/api/todos")
    .then((res) => {
      return res.data;
    });
};

export const createTask = (data) => {
  return instance()
    .post("http://localhost:8000/api/create_todo", data)
    .then((res) => {
      return res.data;
    });
};

export const updateTask = (data) => {
  return instance()
    .put("http://localhost:8000/api/update_todo", data)
    .then((res) => {
      return res.data;
    });
};

export const deleteTask = (id) => {
  return instance()
    .delete(`http://localhost:8000/api/delete_todo/${id}`)
    .then((res) => {
      return res.data;
    });
};
