import Api from "@/services/Api";
import { SolicitacaoProps, SolicitacaoReplyProps } from "@/types/helpdesk";

export default {
  async getCatalog() {
    return Api().get("catalogo");
  },
  async getService(codCatalog: string) {
    return Api().get("servicos/" + codCatalog);
  },
  async getCategory(codCatalog: string) {
    return Api().get("categoria/" + codCatalog);
  },
  async getNetwork() {
    return await Api().get("network");
  },
  async createTicket(form: SolicitacaoProps) {
    return Api().post("ticket", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  async createTicketReply(form: SolicitacaoReplyProps) {
    return Api().post("ticket/reply", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
