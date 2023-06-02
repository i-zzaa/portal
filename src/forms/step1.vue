<template>
  <div
    form="account"
    class="mx-auto flex flex-col w-3/4 min-w-0 p-4 break-words bg-white border-0 dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border"
  >
    <div class="w-full p-8 text-center">
      <h1 class="text-2xl font-medium mb-12 text-title">
        {{ $t("step1_title") }}
        <span class="font-light"> {{ $t("step1_title_detail") }}</span>
      </h1>

      <ul class="flex flex-wrap gap-6 justify-center">
        <li v-for="(item, index) in listCatalogs" :key="index" class="">
          <Card @click="() => nextTicket(item)">
            <template v-slot:title>
              <div class="flex items-center gap-2 text-sm text-start">
                <component :is="item.icon" class="h-6 w-6" />
                {{ item.title }}
              </div>
              <hr class="bg-primary w-full mt-4" />
            </template>
            <div class="mt-8">
              {{ item.description }}
            </div>
          </Card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import { useHelpDesk } from "@/store/module_catalogo";
import { PhKey, PhShareNetwork, PhFloppyDisk } from "@phosphor-icons/vue";
import { mapActions } from "pinia";
import { RouterView } from "vue-router";
import { useWizard } from "@/store/module_wizard";
import { computed } from "vue";

const INDEX_STEP = 0;

export default {
  components: { Card, PhKey, PhShareNetwork, PhFloppyDisk, RouterView },
  setup() {
    const store = useWizard();
    const helpDesk = useHelpDesk();
    const currentStep = computed(() => store.currentStep);
    const steps = computed(() => store.steps);

    const listCatalogs = computed(() => helpDesk.listCatalogs);

    return {
      currentStep,
      steps,
      listCatalogs,
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