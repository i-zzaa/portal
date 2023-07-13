import Api from "@/services/Api";
import { SolicitacaoProps } from "@/types/helpdesk";

export default {
  async getCatalog() {
    return Api().get("catalogo");
  },
  async getService(codCatalog: string) {
    return Api().get("servicos/" + codCatalog);
  },
  async getNetwork() {
    return Api().get("network");
  },
  async createTicket(form: SolicitacaoProps) {
    return Api().post("ticket", form);
  },
};
