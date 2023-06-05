import Api from "@/services/Api";
import { SolicitacaoProps } from "@/types/helpdesk";

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
  async createTicket(form: SolicitacaoProps) {
    return Api().post("ticket", form);
  },
};
