import HelpDeskService from "@/services/HelpDeskService";
import { defineStore } from "pinia";

import { toast } from "vue3-toastify";

export interface CatalogProps {
  icon: string;
  title: string;
  description: string;
}

export const useHelpDesk = defineStore("helpDesk", {
  state: () => ({
    catalogo: "",
    servico: "",
    solicitacao: {
      idCatalog: "",
      idService: "",
      assunto: "",
      detahes: "",
      destinatario: "atendimento-prodam@ios.com.br",
      telefone: "",
      ramal: "",
      ip: "",
      patrimonio: "",
    },
    listCatalogs: [],
    listServices: [],
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
    updateStep(index: number, item: any) {
      this.steps[index] = item;
    },
    setService(params: any) {
      this.servico = params;
      this.solicitacao.idService = params.id;
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
      try {
        const { data }: any = await HelpDeskService.getCatalog();
        this.listCatalogs = data;
      } catch (error) {
        console.log("module_catalogo - getCatalogo - ", error);
        toast.error("Erro ao carregar os catálogos!");
      }
    },
    async getService(idCatalog: number) {
      try {
        const { data } = await HelpDeskService.getService(idCatalog);

        this.listServices = data;
      } catch (error) {
        console.log("module_catalogo - getService - ", error);
        toast.error("Erro ao carregar os serviços!");
      }
    },
    async setSolicitation() {
      try {
        // const { data }: any = await CatalogService.get();
        // this.listCatalogs = data;
      } catch (error) {
        console.log("module_catalogo - setSolicitation - ", error);
        toast.error("Erro ao enviar a solicitação!");
      }
    },
  },
});
