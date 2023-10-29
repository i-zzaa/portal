import HelpDeskService from "@/services/HelpDeskService";
import { SolicitacaoProps } from "@/types/helpdesk";
import { defineStore } from "pinia";

import { toast } from "vue3-toastify";

const defaultSolicitacao: any = {
  codCatalog: "",
  codCategory: "",
  codService: "",
  subject: "",
  detail: "",
  recipient: "crm@i9atech.com",
  telephone: "",
  extension: "",
  ip: sessionStorage.getItem("ip") || "",
  patrimony: "",
  file: null,
  filename: "",
};

export const useHelpDesk = defineStore("helpDesk", {
  state: () => ({
    loading: false,
    catalogo: "",
    servico: "",
    categoria: "",
    solicitacao: { ...defaultSolicitacao },
    listCatalogs: [],
    listCategory: [],
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
      this.solicitacao.codCatalog = params.cod;

      sessionStorage.setItem("codCatalog", params.cod);
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

      this.solicitacao.codService = params.id;
      sessionStorage.setItem("codService", params.id);
    },
    setCategory(params: any) {
      this.categoria = params;

      this.solicitacao.codCategory = params.cod;
      sessionStorage.setItem("codCategory", params.cod);

      this.getService(params.cod);
    },
    setSolicitacao(params: any) {
      this.solicitacao = params;
    },
    async getNetWork() {
      try {
        const { data }: any = await HelpDeskService.getNetwork();
        this.solicitacao.ip = data;
        sessionStorage.setItem("ip", data);
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
    async getService(codCatalog: string) {
      this.loading = true;

      try {
        const { data } = await HelpDeskService.getService(codCatalog);

        this.listServices = data;
        this.loading = false;
      } catch (error) {
        console.log("module_catalogo - getService - ", error);
        toast.error("Erro ao carregar os serviços!");
        this.loading = false;
      }
    },
    async getCategory(codCatalog: string) {
      this.loading = true;

      try {
        const { data } = await HelpDeskService.getCategory(codCatalog);

        this.listCategory = data;
        this.loading = false;
      } catch (error) {
        console.log("module_catalogo -   getCategory - ", error);
        toast.error("Erro ao carregar a categoria!");
        this.loading = false;
      }
    },
    async setSolicitation(form: SolicitacaoProps | any) {
      this.loading = true;

      try {
        const { data } = await HelpDeskService.createTicket(form);
        toast.success("Ticket criado com sucesso!");

        this.solicitacao = { ...defaultSolicitacao };
        this.loading = false;

        return data;
      } catch (error) {
        console.log("module_catalogo - setSolicitation - ", error);
        toast.error("Erro ao enviar a solicitação!");
        this.loading = false;

        throw new Error("Erro ao enviar a solicitação!");
      }
    },
  },
});
