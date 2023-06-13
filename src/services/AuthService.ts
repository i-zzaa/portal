import Api from "@/services/Api";
import { UserRequest } from "@/types/user";

export default {
  async signIn(credentials: UserRequest) {
    return await Api().post("login", credentials);
  },
};
