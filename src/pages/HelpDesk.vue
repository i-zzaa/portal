<template>
  <div class="w-full max-w-full px-3 text-center [flex:0_0_auto]">
    <Step3 />
  </div>
</template>

<script lang="ts">
import Step1 from "@/forms/step1.vue";
import Step2 from "@/forms/step2.vue";
import Step3 from "@/forms/step3.vue";

import { computed } from "vue";
import { useHelpDesk } from "@/store/module_helpdesk";

export default {
  components: { Step3 },
  setup() {
    const store = useHelpDesk();
    const steps = computed(() => store.steps);

    return {
      steps,
    };
  },
  data() {
    return {
      components: [Step1, Step2, Step3],
    };
  },
};
</script>

<style>
</style>