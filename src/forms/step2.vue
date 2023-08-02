<template>
  <container
    :title="$t('step2_title')"
    :detail="$t('step2_title_detail', { catalogo: catalogo?.title })"
    :loading="loading"
  >
    <div>
      <div class="flex flex-wrap mt-6 justify-center">
        <ul class="flex flex-wrap gap-6 justify-center">
          <li v-for="(item, index) in listCategory" :key="index" class="">
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
  </container>
</template>

<script lang="ts">
import {
  PhKey,
  PhShareNetwork,
  PhFloppyDisk,
  PhBrowsers,
} from "@phosphor-icons/vue";
import { useHelpDesk } from "@/store/module_helpdesk";
import { computed } from "vue";
import { mapActions } from "pinia";

import Container from "@/components/Container.vue";
import Card from "@/components/Card.vue";

import { useWizard } from "@/store/module_wizard";

const INDEX_STEP = 1;

export default {
  components: {
    Container,
    Card,
    PhKey,
    PhShareNetwork,
    PhFloppyDisk,
    PhBrowsers,
  },
  setup() {
    const helpDesk = useHelpDesk();
    const catalogo: any = computed(() => helpDesk.catalogo);

    helpDesk.getCategory(catalogo.value.cod);

    const store = useWizard();
    const steps = computed(() => store.steps);
    const loading: any = computed(() => helpDesk.loading);

    const listCategory: any = computed(() => helpDesk.listCategory);

    return {
      catalogo,
      steps,
      listCategory,
      loading,
    };
  },
  methods: {
    ...mapActions(useHelpDesk, ["setCategory"]),
    ...mapActions(useWizard, ["setStep"]),
    ...mapActions(useHelpDesk, ["updateStep"]),

    nextTicket(item: any, index: number = 2) {
      const stepCurrent = { ...this.steps[INDEX_STEP] };

      switch (index) {
        case 0:
          stepCurrent.status = this.$t("ENUM.none");
          break;

        default:
          stepCurrent.status = this.$t("ENUM.success");
          break;
      }

      this.updateStep(INDEX_STEP, stepCurrent);

      const step = { ...this.steps[index] };
      step.status = this.$t("ENUM.none");
      this.updateStep(index, step);

      if (item) {
        this.setCategory(item);
      }
      this.setStep(index);
    },
  },
};
</script>