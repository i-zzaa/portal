import { defineStore } from "pinia";

export const useWizard = defineStore("wizard", {
  state: () => ({
    oldStep: -1,
    currentStep: 0,
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
    setStep(index: number) {
      this.oldStep = this.currentStep;
      this.currentStep = index;
    },
    clear() {
      this.currentStep = 0;

      this.steps.forEach((step) => (step.status = "none"));
    },
    setSolicitation() {},
  },
});
