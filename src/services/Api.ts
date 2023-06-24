import axios from "axios";
import { useAuth } from "@/store/module_login";

export default () => {
  const store = useAuth();

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials: true,
  });

  axiosInstance.interceptors.response.use(
    (response: any) => response,
    (error) => {
      const loggedIn = store.isLoggedIn;
      if (!loggedIn) {
        store.logout();
      }
      return Promise.reject(error);
    }
  );

  if (store.$state.token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${store.$state.token}`;
  }

  return axiosInstance;
};
