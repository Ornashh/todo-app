import axios from "axios";
import { BASE_URL } from "../utils/constants";

const instance = () => {
  const userAuth = JSON.parse(localStorage.getItem("user"));

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { auth: `${userAuth?.token}` },
  });

  axiosInstance.interceptors.response.use((res) => {
    return res;
  });

  return axiosInstance;
};

export default instance;
