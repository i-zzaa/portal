<template>
  <div class="p-4">
    <container :title="$t('step3_title')">
      <form @submit="submit">
        <div class="text-lg my-4" v-if="isReplay">
          {{ ticket }}
        </div>
        <div class="grid grid-cols-6 gap-2 sm:flex-wrap -mx-3 text-left">
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
            :required="!isReplay"
            v-if="!isReplay"
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
            :required="!isReplay"
            v-if="!isReplay"
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
            v-if="!isReplay"
          />
          <field-input
            :label="$t('step3_input_4')"
            name="telefone"
            type="tel"
            autocomplete="telefone"
            id="telefone"
            v-model="form.telefone"
            containerCustom="col-span-6 sm:col-span-2"
            :required="false"
            @change="formatTel"
            :maxlength="9"
            v-if="!isReplay"
          />
          <field-input
            :label="$t('step3_input_5')"
            name="ramal"
            type="text"
            autocomplete="ramal"
            id="ramal"
            v-model="form.ramal"
            containerCustom="col-span-6 sm:col-span-2"
            :required="false"
            v-if="!isReplay"
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
            v-if="!isReplay"
          />
          <field-input
            :label="$t('step3_input_7')"
            name="patrimonio"
            type="text"
            autocomplete="patrimonio"
            id="patrimonio"
            v-model="form.patrimonio"
            containerCustom="col-span-6 sm:col-span-3"
            :required="false"
            v-if="!isReplay"
          />

          <upload class="col-span-6" v-model="form.file" />
        </div>
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
              type="submit"
              send-form-btn=""
              href="javascript:;"
              class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25"
            >
              {{ $t("ENUM.btn_submit") }}
            </button>
          </div>
        </div>
      </form>
    </container>
  </div>
</template>

<script lang="ts">
import { PhKey, PhShareNetwork, PhFloppyDisk } from "@phosphor-icons/vue";
import { computed, reactive } from "vue";
import { mapActions } from "pinia";
import { useWizard } from "@/store/module_wizard";
import { toast } from "vue3-toastify";

import { useHelpDesk } from "@/store/module_helpdesk";

import Container from "@/components/Container.vue";
import Upload from "@/components/Upload.vue";
import Card from "@/components/Card.vue";
import { FieldInput } from "@/components/Filds/index";
import { FieldTextarea } from "@/components/Filds/index";
import { FieldSelect } from "@/components/Filds/index";

const INDEX_STEP = 2;

export default {
  props: {
    hasButtonPrev: { type: Boolean, default: true },
  },
  components: {
    Container,
    Card,
    PhKey,
    PhShareNetwork,
    PhFloppyDisk,
    FieldInput,
    FieldTextarea,
    FieldSelect,
    Upload,
  },
  setup() {
    const store = useWizard();
    const steps = computed(() => store.steps);

    const helpDesk = useHelpDesk();
    helpDesk.getCatalogo();
    helpDesk.getNetWork();

    const solicitacao = computed(() => helpDesk.solicitacao);

    const listCatalogs = computed(() => helpDesk.listCatalogs);
    const listServices = computed(() => helpDesk.listServices);

    const form = reactive({
      ...solicitacao.value,
    });

    const isReplay = computed(() => helpDesk.isReplay);
    const ticket = computed(() => helpDesk.ticket);

    return {
      steps,
      form,
      helpDesk,
      listCatalogs,
      listServices,
      isReplay,
      ticket,
    };
  },

  unmounted() {
    this.helpDesk.setIsReplay(false);
  },

  methods: {
    ...mapActions(useWizard, ["setStep"]),
    ...mapActions(useHelpDesk, ["updateStep"]),

    formatTel(event: any) {
      const cleanedNumber = event.target.value.replace(/\D/g, "");
      let formattedNumber = "";
      if (cleanedNumber.length > 9) {
        formattedNumber = cleanedNumber.replace(
          /^(\d{2})(\d{1})(\d{4})(\d{4})$/,
          "($1)  $2 $3-$4"
        );
      } else {
        formattedNumber = cleanedNumber.replace(
          /^(\d{1})(\d{4})(\d{4})$/,
          "$1  $2-$3"
        );
      }

      // Update the data property with the formatted number
      this.form.telefone = formattedNumber;
    },
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
    async submit(event: any) {
      event.preventDefault();

      if (!this.form.idCatalog) {
        toast.error(this.$t("enum.not_catalog"));
        throw new Error(this.$t("enum.not_catalog"));
      }
      if (!this.form.idService) {
        toast.error(this.$t("enum.not_service"));
        throw new Error(this.$t("enum.not_service"));
      }
      if (!this.form.assunto) {
        toast.error(this.$t("enum.not_title"));
        throw new Error(this.$t("enum.not_title"));
      }
      if (!this.form.detahes) {
        toast.error(this.$t("enum.not_detail"));
        throw new Error(this.$t("enum.not_detail"));
      }
      // if (!this.form.file) {
      //   toast.error(this.$t("enum.not_detail"));
      //   throw new Error(this.$t("enum.not_detail"));
      // }

      const formData = new FormData();
      this.form.file && formData.append("file", this.form?.file);

      const { file, ...result } = this.form;

      formData.append(
        "data",
        JSON.stringify({
          ...result,
        })
      );

      const response: boolean = await this.helpDesk.setSolicitation(formData);

      if (response) {
        this.$router.push("/meus-chamados");
      }
    },
  },
};
</script>