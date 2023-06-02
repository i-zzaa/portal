<template>
  <div
    form="account"
    class="mx-auto flex flex-col w-3/4 min-w-0 p-4 break-words bg-white border-0 dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border"
  >
    <div class="flex flex-wrap -mx-3 text-center">
      <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
        <h1 class="text-2xl font-medium m-12 text-title">
          {{ $t("step2_title") }}
          <span class="font-light">
            {{ $t("step2_title_detail", { catalogo: catalogo?.title }) }}</span
          >
        </h1>
      </div>
    </div>
    <div>
      <div class="flex flex-wrap mt-6 justify-center">
        <ul class="flex flex-wrap gap-6 justify-center">
          <li v-for="(item, index) in listServices" :key="index" class="">
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
      <div class="flex mt-6">
        <button
          type="button"
          @click="() => nextTicket(null, 0)"
          class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
        >
          {{ $t("ENUM.btn_prev") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import { PhKey, PhShareNetwork, PhFloppyDisk } from "@phosphor-icons/vue";
import { useHelpDesk } from "@/store/module_catalogo";
import { computed } from "vue";
import { mapActions } from "pinia";
import { useWizard } from "@/store/module_wizard";

const INDEX_STEP = 1;

export default {
  components: { Card, PhKey, PhShareNetwork, PhFloppyDisk },
  setup() {
    const helpDesk = useHelpDesk();
    const catalogo = computed(() => helpDesk.catalogo);

    helpDesk.getService(catalogo.value.id);

    const store = useWizard();
    const steps = computed(() => store.steps);

    const listServices = computed(() => helpDesk.listServices);

    return {
      catalogo,
      steps,
      listServices,
    };
  },
  methods: {
    ...mapActions(useHelpDesk, ["setService"]),
    ...mapActions(useWizard, ["setStep"]),
    ...mapActions(useHelpDesk, ["updateStep"]),

    nextTicket(item: any, index?: number = 2) {
      const stepCurrent = { ...this.steps[INDEX_STEP] };
      stepCurrent.status = this.$t("ENUM.success");
      this.updateStep(INDEX_STEP, stepCurrent);

      const step = { ...this.steps[index] };
      step.status = this.$t("ENUM.none");
      this.updateStep(index, step);

      if (item) {
        this.setService(item);
      }
      this.setStep(index);
    },
  },
};
</script>