import { Auth } from "@/services/Api";
import { UserRequest } from "@/types/user";

export default {
  async signIn(credentials: UserRequest) {
    return Auth().post("login", credentials);
  },
};
