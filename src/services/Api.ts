import axios from "axios";

export default () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });

  axiosInstance.interceptors.response.use(
    (response: any) => response,
    (error) => {
      if (error.response.status === 401) {
        sessionStorage.removeItem("user");
        location.reload();
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
