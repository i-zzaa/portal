import Api from "@/services/Api";

export default {
  async getServices(idCatalog: number) {
    let value = "contas_acessos";
    switch (idCatalog) {
      case 1:
        value = "contas_acessos.json";
        break;
      case 2:
        value = "rede_conectividade.json";
        break;
      case 3:
        value = "backup_armazenamento.json";
        break;

      default:
        break;
    }
    return Api().get("/constants/servicos/" + value);
  },
};
