import axios from "axios";

export const Auth = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_AUTH,
  });

  return axiosInstance;
};

export default () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const token = sessionStorage.getItem("token");
  if (token) {
    axiosInstance.defaults.headers.common.BAERER_AUTHENTICATION = `Bearer ${token}`;
  }

  axiosInstance.interceptors.response.use(
    (response: any) => response,
    (error) => {
      if (error.response.status === 401) {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        location.reload();
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
