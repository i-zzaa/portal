import HelpDeskService from "@/services/HelpDeskService";
import { SolicitacaoProps } from "@/types/helpdesk";
import { defineStore } from "pinia";

import { toast } from "vue3-toastify";

const defaultSolicitacao: any = {
  idCatalog: "",
  idService: "",
  assunto: "",
  detahes: "",
  destinatario: "crm@i9atech.com",
  telefone: "",
  ramal: "",
  ip: "",
  patrimonio: "",
  file: null,
};

export const useHelpDesk = defineStore("helpDesk", {
  state: () => ({
    loading: false,
    catalogo: "",
    servico: "",
    solicitacao: { ...defaultSolicitacao },
    listCatalogs: [],
    listServices: [],
    isReplay: false,
    ticket: "",
    steps: [
      {
        title: "Catálogo",
        status: "none",
      },
      {
        title: "Serviço",
        status: "none",
      },
      {
        title: "Solicitação",
        status: "none",
      },
    ],
  }),
  getters: {},
  actions: {
    setCatalog(params: any) {
      this.catalogo = params;
      this.solicitacao.idCatalog = params.id;
    },
    setIsReplay(value: boolean) {
      this.isReplay = value;
    },
    setTicket(value: string) {
      this.ticket = value;
    },
    updateStep(index: number, item: any) {
      this.steps[index] = item;
    },
    setService(params: any) {
      this.servico = params;

      this.solicitacao.idService = params?.id;
    },
    setSolicitacao(params: any) {
      this.solicitacao = params;
    },
    async getNetWork() {
      try {
        const { data }: any = await HelpDeskService.getNetwork();
        this.solicitacao.ip = data;
      } catch (error) {
        console.log("module_catalogo - getCatalogo - ", error);
        toast.error("Erro ao carregar os catálogos!");
      }
    },
    async getCatalogo() {
      this.loading = true;

      try {
        const { data }: any = await HelpDeskService.getCatalog();
        this.listCatalogs = data;

        this.loading = false;
      } catch (error) {
        console.log("module_catalogo - getCatalogo - ", error);
        toast.error("Erro ao carregar os catálogos!");
        this.loading = false;
      }
    },
    async getService(idCatalog: number) {
      this.loading = true;

      try {
        const { data } = await HelpDeskService.getService(idCatalog);

        this.listServices = data;
        this.loading = false;
      } catch (error) {
        console.log("module_catalogo - getService - ", error);
        toast.error("Erro ao carregar os serviços!");
        this.loading = false;
      }
    },
    async setSolicitation(form: SolicitacaoProps | any) {
      this.loading = true;

      try {
        await HelpDeskService.createTicket(form);
        toast.success("Ticket criado com sucesso!");

        this.solicitacao = { ...defaultSolicitacao };
        this.loading = false;

        return true;
      } catch (error) {
        console.log("module_catalogo - setSolicitation - ", error);
        toast.error("Erro ao enviar a solicitação!");
        this.loading = false;

        throw new Error("Erro ao enviar a solicitação!");
      }
    },
  },
});
