import MyCallsService from "@/services/MyCallsService";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
export const useMyCalls = defineStore("myCalls", {
  state: () => ({
    catalogo: "",
    servico: "",
    listCall: [],
    ticket: {
      ticket: "",
      status: "",
      detail: [],
    },
    totalPages: 1,
    currentPage: 1,
    loading: false,
  }),
  getters: {},
  actions: {
    async getCalls(pageSize: number, currentPage: number) {
      this.loading = true;
      try {
        const { data }: any = await MyCallsService.getCalls(
          pageSize,
          currentPage
        );
        this.listCall = data.data;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;

        this.loading = false;
      } catch (error) {
        console.log("module_chamados - getCalls - ", error);
        toast.error("Erro ao carregar os chamados!");

        this.loading = false;
      }
    },
    async getMyCall(id: number) {
      this.loading = true;
      try {
        const { data }: any = await MyCallsService.getMyCall(id);
        this.ticket = data.data;

        this.loading = false;
      } catch (error) {
        console.log("module_chamados - getCalls - ", error);
        toast.error("Erro ao carregar os chamados!");

        this.loading = false;
      }
    },
    async search(param: any) {
      this.loading = true;

      if (!param.word) {
        toast.error("Pequisa em branco!");
        return;
      }

      try {
        const { data }: any = await MyCallsService.search(param);
        this.listCall = data;
        this.loading = false;
      } catch (error) {
        console.log("module_chamados - search - ", error);
        toast.error("Erro ao carregar os chamados!");
        this.loading = false;
      }
    },
  },
});
