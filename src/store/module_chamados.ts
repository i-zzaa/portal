import MyCallsService from "@/services/MyCallsService";
import { defineStore } from "pinia";

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
      }
    },
  },
});
