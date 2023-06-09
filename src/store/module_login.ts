import AuthService from "@/services/AuthService";
import { UserRequest } from "@/types/user";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

const token = sessionStorage.getItem("token");
const user = sessionStorage.getItem("user");

export const useAuth = defineStore("user", {
  state: () => ({
    name: "",
    token: token ? JSON.parse(token) : null,
    user: user ? JSON.parse(user) : {},
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    async login(form: UserRequest) {
      try {
        const { data }: any = await AuthService.signIn(form);
        if (!data.token) {
          toast.error("Erro ao efetuar o login!");
          throw new Error("Erro ao efetuar o login!");
        }
        this.token = data.token;
        this.user = data.user;
        sessionStorage.setItem("token", JSON.stringify(this.token));
        sessionStorage.setItem("user", JSON.stringify(this.user));

        return true;
      } catch (error) {
        console.log("module_login - login - ", error);
        toast.error("Erro ao efetuar o login!");
      }
    },
    logout() {
      this.user = null;
      this.token = null;

      sessionStorage.clear();
    },
  },
});
