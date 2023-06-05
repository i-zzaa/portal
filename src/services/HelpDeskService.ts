import Api from "@/services/Api";

export default {
  async getCatalog() {
    return Api().get("catalogo");
  },
  async getService(idCatalog: number) {
    return Api().get("servicos/" + idCatalog);
  },
  async getNetwork() {
    return Api().get("network");
  },
};
