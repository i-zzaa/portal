import Api from "@/services/Api";

export default {
  async get(idCatalog: number) {
    return Api().get("servicos/" + idCatalog);
  },
};
