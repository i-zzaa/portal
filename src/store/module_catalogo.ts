import HelpDeskService from "@/services/HelpDeskService";
import { defineStore } from "pinia";

export const useHelpDesk = defineStore("helpDesk", {
  state: () => ({
    catalogo: "",
    servico: "",
    solicitacao: "",
    listCatalogs: [
      {
        id: 1,
        icon: "PhKey",
        key: "contas_acessos",
        img: "",
        title: "Contas e Acesso",
        description:
          "O portal RDS Web permite ao usuário resetar ou desbloquear suas senhas. Clique aqui para acessar o portal.",
      },
      {
        id: 2,
        icon: "PhShareNetwork",
        img: "",
        key: "rede_conectividade",
        title: "Rede e Conectividade",
        description:
          "O portal RDS Web permite ao usuário resetar ou desbloquear suas senhas. Clique aqui para acessar o portal.",
      },
      {
        id: 3,
        icon: "PhFloppyDisk",
        img: "",
        key: "backup_armazenamento",
        title: "Backup e Armazenamento",
        description:
          "O portal RDS Web permite ao usuário resetar ou desbloquear suas senhas. Clique aqui para acessar o portal.",
      },
    ],
    listServices: [],
    listSolicitations: [],
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
    setSolicitation() {},

    async getService(idCatalog: number) {
      try {
        const { data }: any = await HelpDeskService.getServices(idCatalog);
        this.listServices = data;
      } catch (error) {
        console.log("module_catalogo - getService - ", error);
      }
    },
  },
});
