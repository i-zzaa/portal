<template>
  <div class="p-4">
    <div
      class="flex flex-col w-2/3 mx-auto py-4 px-8 break-words bg-white dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border"
    >
      <div class="flex flex-wrap -mx-3 text-start">
        <div class="w-10/12 max-w-full [flex:0_0_auto]">
          <h1 class="text-3xl font-ligth my-12 text-title">
            {{ $t("step3_title") }}
            <span class="font-light"> {{ $t("step3_title_detail") }}</span>
          </h1>
        </div>
      </div>
      <div>
        <form
          class="grid grid-cols-6 gap-2 sm:flex-wrap -mx-3 text-left"
          @submit="submit"
        >
          <field-select
            :label="$t('step3_select_1')"
            name="assunto"
            type="text"
            autocomplete="assunto"
            id="assunto"
            v-model="form.idCatalog"
            containerCustom="col-span-6 sm:col-span-3	"
            :options="listCatalogs"
            label-index="title"
            index="id"
            :onchange="onchange"
            :required="true"
          />
          <field-select
            :label="$t('step3_select_2')"
            name="assunto"
            type="text"
            autocomplete="assunto"
            id="assunto"
            v-model="form.idService"
            containerCustom="col-span-6 sm:col-span-3	"
            :options="listServices"
            label-index="title"
            index="id"
            :onchange="() => {}"
            :disabled="!form.idCatalog"
            :required="true"
          />
          <field-input
            :label="$t('step3_input_1')"
            name="assunto"
            type="text"
            autocomplete="assunto"
            id="assunto"
            v-model="form.assunto"
            containerCustom="col-span-6 sm:col-span-6	"
            :required="true"
          />
          <field-textarea
            :label="$t('step3_input_2')"
            name="detahes"
            type="text"
            autocomplete="detahes"
            id="detahes"
            v-model="form.detahes"
            containerCustom="col-span-6 sm:col-span-6	"
            :required="true"
          />
          <field-input
            :label="$t('step3_input_3')"
            name="destinatario"
            type="text"
            autocomplete="destinatario"
            id="destinatario"
            v-model="form.destinatario"
            containerCustom="col-span-6 sm:col-span-2"
            :disabled="true"
          />
          <field-input
            :label="$t('step3_input_4')"
            name="telefone"
            type="text"
            autocomplete="telefone"
            id="telefone"
            v-model="form.telefone"
            containerCustom="col-span-6 sm:col-span-2"
            :required="true"
          />
          <field-input
            :label="$t('step3_input_5')"
            name="ramal"
            type="text"
            autocomplete="ramal"
            id="ramal"
            v-model="form.ramal"
            containerCustom="col-span-6 sm:col-span-2"
            :required="true"
          />
          <field-input
            :label="$t('step3_input_6')"
            name="ip"
            type="text"
            autocomplete="ip"
            id="ip"
            v-model="form.ip"
            containerCustom="col-span-6 sm:col-span-3"
            :disabled="true"
          />
          <field-input
            :label="$t('step3_input_7')"
            name="patrimonio"
            type="text"
            autocomplete="patrimonio"
            id="patrimonio"
            v-model="form.patrimonio"
            containerCustom="col-span-6 sm:col-span-3"
            :required="true"
          />
        </form>
        <div class="flex flex-wrap -mx-3">
          <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]">
            <button
              v-if="hasButtonPrev"
              type="button"
              @click="() => prevTicket()"
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
import { useHelpDesk } from "@/store/module_helpdesk";
import { computed, reactive } from "vue";
import { mapActions } from "pinia";
import { useWizard } from "@/store/module_wizard";

import { FieldInput } from "@/components/Filds/index";
import { FieldTextarea } from "@/components/Filds/index";
import { FieldSelect } from "@/components/Filds/index";

const INDEX_STEP = 2;

export default {
  props: {
    hasButtonPrev: { type: Boolean, default: true },
  },
  components: {
    Card,
    PhKey,
    PhShareNetwork,
    PhFloppyDisk,
    FieldInput,
    FieldTextarea,
    FieldSelect,
  },
  setup() {
    const store = useWizard();
    const steps = computed(() => store.steps);

    const helpDesk = useHelpDesk();
    helpDesk.getCatalogo();
    helpDesk.getNetWork();
    const solicitacao = computed(() => helpDesk.solicitacao);

    helpDesk.setSolicitacao({
      ...solicitacao.value,
    });

    const listCatalogs = computed(() => helpDesk.listCatalogs);
    const listServices = computed(() => helpDesk.listServices);

    const form = reactive({
      ...helpDesk.solicitacao,
    });

    return {
      steps,
      form,
      helpDesk,
      listCatalogs,
      listServices,
    };
  },
  methods: {
    ...mapActions(useWizard, ["setStep"]),
    ...mapActions(useHelpDesk, ["updateStep"]),

    prevTicket() {
      const step = { ...this.steps[INDEX_STEP] };
      step.status = this.$t("ENUM.none");
      this.updateStep(INDEX_STEP, step);

      this.setStep(1);
    },
    onchange(e: any) {
      e.preventDefault();
      this.helpDesk.getService(Number(this.form.idCatalog));
      this.form.idService = "";
    },
    submit() {},
  },
};
</script>