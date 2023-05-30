import { defineStore } from "pinia";

const token = localStorage.getItem("token") || null;
export const useAuth = defineStore("user", {
  state: () => ({
    name: "",
    token: token,
    user: "",
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    login() {},
    logout() {},
  },
});
