<template>
  <div class="p-4">
    <container :title="$t('step3_title')" :loading="loading">
      <div class="text-lg my-4" v-if="isReply">
        {{ $t("ticket_reply", { ticket: ticket?.ticket }) }}
      </div>
      <div class="grid grid-cols-6 gap-2 sm:flex-wrap -mx-3 text-left">
        <field-select
          :label="$t('step3_select_1')"
          name="catalogo"
          type="text"
          autocomplete="catalogo"
          id="catalogo"
          v-model="form.codCatalog"
          containerCustom="col-span-6 sm:col-span-2"
          :options="listCatalogs"
          label-index="title"
          index="cod"
          :onchange="onchangeCatalog"
          :required="!isReply"
          v-if="!isReply"
        />
        <field-select
          :label="$t('step3_select_2')"
          name="category"
          type="text"
          autocomplete="category"
          id="category"
          v-model="form.codCategory"
          containerCustom="col-span-6 sm:col-span-2"
          :options="listCategory"
          label-index="title"
          index="cod"
          :onchange="onchangeCategory"
          :disabled="!form.codCatalog"
          :required="!isReply"
          v-if="!isReply"
        />
        <field-select
          :label="$t('step3_select_3')"
          name="service"
          type="text"
          autocomplete="service"
          id="service"
          v-model="form.codService"
          containerCustom="col-span-6 sm:col-span-2"
          :options="listServices"
          label-index="title"
          index="id"
          :onchange="() => {}"
          :disabled="!form.codCategory"
          :required="!isReply"
          v-if="!isReply"
        />
        <field-input
          :label="$t('step3_input_1')"
          name="subject"
          type="text"
          autocomplete="subject"
          id="subject"
          v-model="form.subject"
          containerCustom="col-span-6 sm:col-span-6	"
          :required="true"
        />
        <field-textarea
          :label="$t('step3_input_2')"
          name="detail"
          type="text"
          autocomplete="detail"
          id="detail"
          v-model="form.detail"
          containerCustom="col-span-6 sm:col-span-6	"
          :required="true"
        />
        <field-input
          :label="$t('step3_input_3')"
          name="recipient"
          type="text"
          autocomplete="recipient"
          id="recipient"
          v-model="form.recipient"
          containerCustom="col-span-6 sm:col-span-2"
          :disabled="true"
          v-if="!isReply"
        />
        <field-input
          :label="$t('step3_input_4')"
          name="telephone"
          type="tel"
          autocomplete="telephone"
          id="telephone"
          v-model="form.telephone"
          containerCustom="col-span-6 sm:col-span-2"
          :required="false"
          @change="formatTel"
          :maxlength="9"
          v-if="!isReply"
        />
        <field-input
          :label="$t('step3_input_5')"
          name="extension"
          type="text"
          autocomplete="extension"
          id="extension"
          v-model="form.extension"
          containerCustom="col-span-6 sm:col-span-2"
          :required="false"
          v-if="!isReply"
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
          v-if="!isReply"
        />
        <field-input
          :label="$t('step3_input_7')"
          name="patrimony"
          type="text"
          autocomplete="patrimony"
          id="patrimony"
          v-model="form.patrimony"
          containerCustom="col-span-6 sm:col-span-3"
          :required="false"
          v-if="!isReply"
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
            type="button"
            :onclick="submit"
            send-form-btn=""
            href="javascript:;"
            class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25"
          >
            {{ $t("ENUM.btn_submit") }}
          </button>
        </div>
      </div>
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
import { useMyCalls } from "@/store/module_chamados";

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
    const helpDesk = useHelpDesk();
    const myCalls = useMyCalls();

    helpDesk.getNetWork();
    helpDesk.getCatalogo();

    const steps = computed(() => store.steps);
    const solicitacao = computed(() => helpDesk.solicitacao);
    const listCatalogs = computed(() => helpDesk.listCatalogs);
    const listCategory = computed(() => helpDesk.listCategory);
    const listServices = computed(() => helpDesk.listServices);
    const loading: any = computed(() => helpDesk.loading);
    const ip = computed(() => helpDesk.solicitacao.ip);

    const form = reactive({
      ...solicitacao.value,
      ip: ip.value,
    });

    const isReply = computed(() => helpDesk.isReply);
    const ticket: any = computed(() => myCalls.ticket);

    return {
      steps,
      form,
      helpDesk,
      listCatalogs,
      listCategory,
      listServices,
      isReply,
      ticket,
      loading,
    };
  },

  unmounted() {
    this.helpDesk.setIsReply(false);
  },

  methods: {
    ...mapActions(useWizard, ["setStep"]),
    ...mapActions(useHelpDesk, ["updateStep"]),
    ...mapActions(useHelpDesk, ["getCategory"]),
    ...mapActions(useHelpDesk, ["getService"]),

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
      this.form.telephone = formattedNumber;
    },
    prevTicket() {
      const step = { ...this.steps[INDEX_STEP] };
      step.status = this.$t("ENUM.none");
      this.updateStep(INDEX_STEP, step);

      this.setStep(1);
    },
    onchangeCatalog(e: any) {
      e.preventDefault();
      this.getCategory(this.form.codCatalog);
      this.form.codCategory = "";
    },
    onchangeCategory(e: any) {
      e.preventDefault();
      this.getService(this.form.codCategory);
      this.form.codService = "";
    },

    async submit(event: any) {
      event.preventDefault();

      if (!this.form.codCatalog && !this.isReply) {
        toast.error(this.$t("ENUM.not_catalog"));
        throw new Error(this.$t("ENUM.not_catalog"));
      }
      if (!this.form.codCategory && !this.isReply) {
        toast.error(this.$t("ENUM.not_category"));
        throw new Error(this.$t("ENUM.not_category"));
      }
      if (!this.form.codService && !this.isReply) {
        toast.error(this.$t("ENUM.not_service"));
        throw new Error(this.$t("ENUM.not_service"));
      }
      if (!this.form.subject) {
        toast.error(this.$t("ENUM.not_title"));
        throw new Error(this.$t("ENUM.not_title"));
      }
      if (!this.form.detail) {
        toast.error(this.$t("ENUM.not_detail"));
        throw new Error(this.$t("ENUM.not_detail"));
      }

      this.form.filename = this.form.file?.name;

      if (this.isReply) {
        this.form.ticketId = this.ticket.id;
      }

      const { file, ...result } = this.form;

      const formData = new FormData();
      formData.append("file", this.form.file);
      formData.append(
        "form",
        JSON.stringify({
          ...result,
        })
      );

      const response: any = this.isReply
        ? await this.helpDesk.setSolicitationReply(formData)
        : await this.helpDesk.setSolicitation(formData);

      if (Boolean(response.TicketID)) {
        this.$router.push(`/meus-chamados/${response.TicketID}`);
      }
    },
  },
};
</script>