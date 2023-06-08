import { Auth, AuthGovAuthorize } from "@/services/Api";
import { UserRequest } from "@/types/user";
import qs from "qs";

export default {
  async signIn(credentials: UserRequest) {
    return await Auth().post("login", credentials);
  },
  async authorize() {
    const params = {
      client_id: import.meta.env.VITE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_CLIENT_URI,
      response_type: "code",
      scope: "openid+profile+email",
      state: import.meta.env.VITE_CLIENT_STATE,
    };
    const queryString = qs.stringify(params);

    window.location.href = `${import.meta.env.VITE_API_AUTH_GOV}authorize?`;
  },
  async getTokenGov(code: any) {
    const data = {
      grant_type: "authorization_code",
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
      redirect_uri: import.meta.env.VITE_CLIENT_URI,
      code,
    };

    const response = await AuthGovAuthorize().post("token", qs.stringify(data));

    if (response.status === 200) {
      return response.data.access_token;
    } else {
      throw new Error("Falha ao obter o token de acesso");
    }
  },
  async getUserData() {
    const response = await AuthGovAuthorize().get("userinfo");

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Falha ao obter os dados do usuário");
    }
  },
};
