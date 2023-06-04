import AuthService from "@/services/AuthService";
import { UserRequest } from "@/types/user";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

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
    async login(form: UserRequest) {
      try {
        const { data }: any = await AuthService.signIn(form);
        this.user = data;
      } catch (error) {
        console.log("module_catalogo - getCatalogo - ", error);
        toast.error("Erro ao carregar os catálogos!");
      }
    },
    logout() {},
  },
});
