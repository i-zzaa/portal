import AuthService from "@/services/AuthService";
import { UserRequest } from "@/types/user";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

const user = sessionStorage.getItem("user");

export const useAuth = defineStore("user", {
  state: () => ({
    username: "",
    user: user ? JSON.parse(user) : null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    async login(form: UserRequest) {
      try {
        const response: any = await AuthService.signIn(form);
        if (response.status !== 200 && response.status !== 201) {
          this.user = null;
          toast.error("Erro ao efetuar o login!");
          throw new Error("Erro ao efetuar o login!");
        }
        this.user = response.data.user;
        this.username = response.data.user.username;
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
