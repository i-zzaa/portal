import AuthService from "@/services/AuthService";
import { UserRequest } from "@/types/user";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

const user = sessionStorage.getItem("user");
const token = sessionStorage.getItem("token");

export const useAuth = defineStore("user", {
  state: () => ({
    username: "",
    token: token ? JSON.parse(token) : null,
    user: user ? JSON.parse(user) : null,
    loading: false,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    async login(form: UserRequest) {
      try {
        this.loading = true;
        const { data, message }: any = await AuthService.signIn(form);
        // if (response.status !== 200 && response.status !== 201) {
        if (!data.token) {
          this.user = null;
          toast.error(message);
          throw new Error(message);
        }
        this.user = data.user;
        this.username = data.user.username;
        this.token = data.token;
        sessionStorage.setItem("user", JSON.stringify(this.user));
        sessionStorage.setItem("token", JSON.stringify(this.token));
        this.loading = false;

        return true;
      } catch (error: any) {
        console.log("module_login - login - ", error);
        toast.error(error.message);
        this.loading = false;
      }
    },
    logout() {
      this.user = null;
      sessionStorage.clear();
    },
  },
});
