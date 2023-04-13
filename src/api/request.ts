import { message } from "antd";
import axios, { AxiosResponse } from "axios";

const request = axios.create({
  // baseURL: 'http://127.0.0.1:7001/',
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

request.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    const { code, message: msg, data } = response.data;

    if (code !== 0) {
      message.error(msg);
      return Promise.reject(msg);
    }

    return data;
  },
  (error) => {
    if (error.response.status === 401) {
      message.error("登录异常，请重新登录");
      setTimeout(() => {
        window.location.href = location.origin + "/login";
      }, 1000);
    }

    return Promise.reject(error);
  }
);

export default request;
