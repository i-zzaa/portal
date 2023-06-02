<template>
  <div class="p-4">
    <div
      class="flex flex-col w-2/3 mx-auto p-4 break-words bg-white dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border"
    >
      <div class="flex flex-wrap -mx-3 text-center">
        <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
          <h1 class="text-2xl font-medium m-12 text-title">
            {{ $t("step3_title") }}
            <span class="font-light">
              {{
                $t("step3_title_detail", { solicitacao: solicitacao?.title })
              }}</span
            >
          </h1>
        </div>
      </div>
      <div>
        <div class="flex flex-wrap -mx-3 text-left">
          <div
            class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-8/12"
          >
            <label
              class="mb-2 ml-1 font-bold text-[.75rem] text-slate-700 dark:text-white/80"
              for="Street Name"
              >Street Name</label
            ><input
              type="text"
              name="Street Name"
              placeholder="Eg. Soft"
              class="focus:shadow-[0_0_0_2px_#e9aede] dark:bg-grey-950 dark:placeholder:text-white/80 dark:text-white/80 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none"
            />
          </div>
          <div
            class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-4/12"
          >
            <label
              class="mb-2 ml-1 font-bold text-[.75rem] text-slate-700 dark:text-white/80"
              for="Street No"
              >Street No</label
            ><input
              type="number"
              name="Street No"
              min="01"
              placeholder="Eg 221"
              class="focus:shadow-[0_0_0_2px_#e9aede] dark:bg-grey-950 dark:placeholder:text-white/80 dark:text-white/80 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none"
            />
          </div>
          <div
            class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-8/12"
          >
            <label
              class="mb-2 ml-1 font-bold text-[.75rem] text-slate-700 dark:text-white/80"
              for="Street Name"
              >Street Name</label
            ><input
              type="text"
              name="Street Name"
              placeholder="Eg. Soft"
              class="focus:shadow-[0_0_0_2px_#e9aede] dark:bg-grey-950 dark:placeholder:text-white/80 dark:text-white/80 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none"
            />
          </div>
          <div
            class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-4/12"
          >
            <label
              class="mb-2 ml-1 font-bold text-[.75rem] text-slate-700 dark:text-white/80"
              for="Street No"
              >Street No</label
            ><input
              type="number"
              name="Street No"
              min="01"
              placeholder="Eg 221"
              class="focus:shadow-[0_0_0_2px_#e9aede] dark:bg-grey-950 dark:placeholder:text-white/80 dark:text-white/80 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none"
            />
          </div>
          <div
            class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-8/12"
          >
            <label
              class="mb-2 ml-1 font-bold text-[.75rem] text-slate-700 dark:text-white/80"
              for="Street Name"
              >Street Name</label
            ><input
              type="text"
              name="Street Name"
              placeholder="Eg. Soft"
              class="focus:shadow-[0_0_0_2px_#e9aede] dark:bg-grey-950 dark:placeholder:text-white/80 dark:text-white/80 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none"
            />
          </div>
          <div
            class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-4/12"
          >
            <label
              class="mb-2 ml-1 font-bold text-[.75rem] text-slate-700 dark:text-white/80"
              for="Street No"
              >Street No</label
            ><input
              type="number"
              name="Street No"
              min="01"
              placeholder="Eg 221"
              class="focus:shadow-[0_0_0_2px_#e9aede] dark:bg-grey-950 dark:placeholder:text-white/80 dark:text-white/80 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]">
            <button
              type="button"
              @click="() => nextTicket()"
              class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
            >
              {{ $t("ENUM.btn_prev") }}
            </button>
            <button
              type="button"
              send-form-btn=""
              href="javascript:;"
              class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25"
            >
              {{ $t("ENUM.btn_submit") }}
            </button>
          </div>
        </div>
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

const INDEX_STEP = 2;

export default {
  components: { Card, PhKey, PhShareNetwork, PhFloppyDisk },
  setup() {
    const helpDesk = useHelpDesk();

    const catalogo = computed(() => helpDesk.catalogo);
    const solicitacao = computed(() => helpDesk.solicitacao);

    const store = useWizard();
    const steps = computed(() => store.steps);

    return {
      solicitacao,
      steps,
    };
  },
  methods: {
    ...mapActions(useWizard, ["setStep"]),
    ...mapActions(useHelpDesk, ["updateStep"]),

    nextTicket() {
      const step = { ...this.steps[2] };
      step.status = this.$t("ENUM.none");
      this.updateStep(2, step);

      this.setStep(1);
    },
  },
};
</script>