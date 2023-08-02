<template>
  <container
    :title="$t('step1_title')"
    :detail="$t('step1_title_detail')"
    :loading="loading"
  >
    <ul class="flex flex-wrap gap-6 justify-center">
      <li
        v-for="(item, index) in listCatalogs"
        :key="index"
        class="w-full md:w-64"
      >
        <Card @click="() => nextTicket(item)">
          <template v-slot:title>
            <div
              class="flex items-center gap-2 text-sm text-start text-primary"
            >
              <component :is="item.icon" class="h-6 w-6" />
              {{ item.title }}
            </div>
          </template>
        </Card>
      </li>
    </ul>
    <div class="flex mt-6"></div>
  </container>
</template>


<script lang="ts">
import Container from "@/components/Container.vue";
import Card from "@/components/Card.vue";
import { useHelpDesk } from "@/store/module_helpdesk";
import {
  PhKey,
  PhShareNetwork,
  PhFloppyDisk,
  PhBrowsers,
} from "@phosphor-icons/vue";
import { mapActions } from "pinia";
import { RouterView } from "vue-router";
import { useWizard } from "@/store/module_wizard";
import { computed } from "vue";

const INDEX_STEP = 0;

export default {
  components: {
    Container,
    Card,
    PhKey,
    PhShareNetwork,
    PhFloppyDisk,
    RouterView,
    PhBrowsers,
  },
  setup() {
    const store = useWizard();
    const helpDesk = useHelpDesk();
    const currentStep = computed(() => store.currentStep);
    const steps = computed(() => store.steps);

    const loading: any = computed(() => helpDesk.loading);

    const listCatalogs: any = computed(() => helpDesk.listCatalogs);
    return {
      currentStep,
      steps,
      listCatalogs,
      helpDesk,
      loading,
    };
  },
  methods: {
    ...mapActions(useHelpDesk, ["setCatalog"]),
    ...mapActions(useWizard, ["setStep"]),
    ...mapActions(useHelpDesk, ["updateStep"]),

    nextTicket(item: any) {
      const stepCurrent = { ...this.steps[INDEX_STEP] };
      stepCurrent.status = this.$t("ENUM.success");
      this.updateStep(INDEX_STEP, stepCurrent);

      const step = { ...this.steps[1] };
      step.status = this.$t("ENUM.none");
      this.updateStep(1, step);

      this.setCatalog(item);
      this.setStep(1);
    },
  },
};
</script>