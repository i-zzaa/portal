import AuthService from "@/services/AuthService";
import { UserRequest } from "@/types/user";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

const user = sessionStorage.getItem("user");

export const useAuth = defineStore("user", {
  state: () => ({
    name: "",
    user: user ? JSON.parse(user) : {},
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    async login(form: UserRequest) {
      try {
        const { data }: any = await AuthService.signIn(form);
        if (!data.user) {
          toast.error("Erro ao efetuar o login!");
          throw new Error("Erro ao efetuar o login!");
        }
        this.user = data.user;
        sessionStorage.setItem("user", JSON.stringify(this.user));

        return true;
      } catch (error) {
        console.log("module_login - login - ", error);
        toast.error("Erro ao efetuar o login!");
      }
    },
    logout() {
      this.user = null;
      sessionStorage.clear();
    },
  },
});
