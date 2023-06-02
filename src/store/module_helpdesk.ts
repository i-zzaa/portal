import CatalogService from "@/services/CatalogService";
import HelpDeskService from "@/services/HelpDeskService";
import { AxiosResponse } from "axios";
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
    },
    updateStep(index: number, item: any) {
      this.steps[index] = item;
    },
    setService(params: any) {
      this.servico = params;
    },
    async getCatalogo() {
      try {
        const { data }: any = await CatalogService.get();
        this.listCatalogs = data;
      } catch (error) {
        console.log("module_catalogo - getCatalogo - ", error);
        toast.error("Erro ao carregar os catálogos!");
      }
    },
    async getService(idCatalog: number) {
      try {
        const { data } = await HelpDeskService.get(idCatalog);

        this.listServices = data;
      } catch (error) {
        console.log("module_catalogo - getService - ", error);
        toast.error("Erro ao carregar os serviços!");
      }
    },
    async setSolicitation(params: any) {
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
