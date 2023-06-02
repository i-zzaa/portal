<template>
  <div class="w-full max-w-full px-3 text-center [flex:0_0_auto]">
    <Wizard
      title="Selecione um catálogo de Serviço"
      description="This information will let us know more about you."
      :steps="store.steps"
      :components="components"
      :hasclick="false"
    />
  </div>
</template>

<script lang="ts">
import Step1 from "@/forms/step1.vue";
import Step2 from "@/forms/step2.vue";
import Step3 from "@/forms/step3.vue";

import Wizard from "@/components/Wizard.vue";

import { useHelpDesk } from "@/store/module_helpdesk";

export default {
  components: { Step1, Step2, Step3, Wizard },
  setup() {
    const store = useHelpDesk();
    store.getCatalogo();

    return {
      store,
    };
  },
  data() {
    return {
      components: [Step1, Step2, Step3],
    };
  },
};
</script>