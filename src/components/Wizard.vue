<template>
  <div class="w-full max-w-full px-3 text-center [flex:0_0_auto]">
    <h3 class="text-[#344767] mt-12 text-lg" v-if="title">
      {{ title }}
    </h3>
    <h5 class="font-normal dark:text-white text-[#8392ab]" v-if="description">
      {{ description }}
    </h5>
    <div class="mb-12">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full max-w-full px-3 mx-auto my-12 [flex:0_0_auto]">
          <div class="grid" :class="`grid-cols-${steps?.length}`">
            <button
              v-for="(step, index) in steps"
              :key="index"
              @click="() => hasclick && handleClick(index)"
              type="button"
              class="before:w-[0.85rem] before:h-[0.85rem] before:rounded-[50%] after:top-[5px] rounded-0 indent-[-82.5rem] relative m-0 border-none bg-transparent px-1.5 pb-0.5 pt-5 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:transition-all before:ease-linear before:content-[''] sm:indent-0 before:scale-[1.2] before:bg-current after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:h-0.5 after:w-full after:transition-all after:ease-linear after:content-[''] after:bg-current"
              :title="step.title"
              :class="{
                'after:block': currentStep === index,
                'after:hidden': index === 0,
                'text-primary':
                  (currentStep !== index &&
                    step.status === $t('ENUM.success')) ||
                  currentStep === index,
                'text-[#dee2e6]':
                  currentStep !== index && step.status === $t('ENUM.none'),
                'text-red-01':
                  currentStep !== index && step.status === $t('ENUM.error'),
                'cursor-pointer': hasclick,
                'cursor-no-drop': !hasclick,
              }"
            >
              <span>{{ step.title }}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full max-w-full px-3 m-auto [flex:0_0_auto]">
          <form class="relative mb-32">
            <div v-for="(component, index) in components">
              <component :is="component" v-if="currentStep === index" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useWizard } from "@/store/module_wizard";
import { mapActions } from "pinia";
import { computed } from "vue";
import { useHelpDesk } from "@/store/module_helpdesk";

export interface StepsProps {
  title: string;
  status: "success" | "error" | "none";
}

export default {
  props: {
    title: String,
    description: String,
    steps: { type: Array<any>, required: true },
    components: Array,
    hasclick: { type: Boolean, required: false, default: true },
  },
  setup() {
    const store = useWizard();
    const currentStep = computed(() => store.currentStep);

    return {
      currentStep,
    };
  },
  methods: {
    ...mapActions(useWizard, ["setStep"]),
    ...mapActions(useHelpDesk, ["updateStep"]),

    handleClick(index: number) {
      const stepCurrent = { ...this.steps[this.currentStep] };
      stepCurrent.status = this.$t("ENUM.success");
      this.updateStep(this.currentStep, stepCurrent);

      const step = { ...this.steps[index] };
      step.status = this.$t("ENUM.none");
      this.updateStep(index, step);

      this.setStep(index);
    },
    nextStep() {
      if (this.currentStep < this.steps.length) {
        this.setStep(this.currentStep + 1);
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.setStep(this.currentStep - 1);
      }
    },
  },
};
</script>

<style>
</style>