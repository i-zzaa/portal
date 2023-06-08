import axios from "axios";

export const Auth = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_AUTH,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
};
export const AuthGovAuthorize = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_AUTH_GOV,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  const token = sessionStorage.getItem("tokenGov");
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
      token
    )}`;
  }

  return axiosInstance;
};

export default () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const token = sessionStorage.getItem("token");
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
      token
    )}`;
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
