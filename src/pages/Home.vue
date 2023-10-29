<template>
  <div class="w-full max-w-full px-3 text-center [flex:0_0_auto]">
    <Wizard
      :title="$t('step1_title')"
      :description="$t('step1_title_detail')"
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
import { useWizard } from "@/store/module_wizard";

export default {
  components: { Step1, Step2, Step3, Wizard },
  setup() {
    const store = useHelpDesk();
    const wizardStore = useWizard();

    store.getCatalogo();
    wizardStore.clear();

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