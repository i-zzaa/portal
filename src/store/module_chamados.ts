import MyCallsService from "@/services/MyCallsService";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

export const useMyCalls = defineStore("myCalls", {
  state: () => ({
    catalogo: "",
    servico: "",
    listCall: [],
    totalPages: 1,
    currentPage: 1,
  }),
  getters: {},
  actions: {
    async getCalls(pageSize: number, currentPage: number) {
      try {
        const { data }: any = await MyCallsService.getCalls(
          pageSize,
          currentPage
        );
        this.listCall = data.data;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;
      } catch (error) {
        console.log("module_chamados - getCalls - ", error);
        toast.error("Erro ao carregar os chamados!");
      }
    },
    async search(word: string) {
      if (!word) {
        toast.error("Pequisa em branco!");
        return;
      }

      try {
        const { data }: any = await MyCallsService.search(word);
        this.listCall = data;
      } catch (error) {
        console.log("module_chamados - search - ", error);
        toast.error("Erro ao carregar os chamados!");
      }
    },
  },
});
