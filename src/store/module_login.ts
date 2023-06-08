import AuthService from "@/services/AuthService";
import { UserRequest } from "@/types/user";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

const token = localStorage.getItem("token") || null;
const user = localStorage.getItem("user") || null;

export const useAuth = defineStore("user", {
  state: () => ({
    name: "",
    token: token,
    user: user,
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
    async authorize() {
      try {
        await AuthService.authorize();
      } catch (error) {
        console.log("module_login - authorize - ", error);
        toast.error("Erro ao efetuar o login via Gov!");
      }
    },
    async getTokenGov(code: any) {
      try {
        await AuthService.getTokenGov(code);
      } catch (error) {
        console.log("module_login - getTokenGov - ", error);
        toast.error("Erro ao efetuar o login via Gov!");
      }
    },
    logout() {
      this.user = null;
      this.token = null;

      sessionStorage.clear();
    },
  },
});
