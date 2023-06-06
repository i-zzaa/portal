import { Auth } from "@/services/Api";
import { UserRequest } from "@/types/user";

export default {
  async signIn(credentials: UserRequest) {
    return await Auth().post("login", credentials);
  },
};
