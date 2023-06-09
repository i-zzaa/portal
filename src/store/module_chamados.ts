import MyCallsService from "@/services/MyCallsService";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

export const useMyCalls = defineStore("myCalls", {
  state: () => ({
    catalogo: "",
    servico: "",
    listCall: [],
  }),
  getters: {},
  actions: {
    async getCalls() {
      try {
        const { data }: any = await MyCallsService.getCalls();
        this.listCall = data;
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
