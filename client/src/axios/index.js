import axios from "axios";

const instance = () => {
  const userAuth = JSON.parse(localStorage.getItem("user"));

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: { auth: `${userAuth?.token}` },
  });

  axiosInstance.interceptors.response.use((res) => {
    return res;
  });

  return axiosInstance;
};

export default instance;
