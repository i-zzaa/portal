import Api from "@/services/Api";

export default {
  async get() {
    return Api().get("/catalogo");
  },
};
