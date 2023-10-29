import Api from "@/services/Api";
import { UserRequest } from "@/types/user";

export default {
  async signIn(credentials: UserRequest) {
    return await Api().post("login", credentials);
  },
  async logout() {
    return await Api().post("logout");
  },
};
