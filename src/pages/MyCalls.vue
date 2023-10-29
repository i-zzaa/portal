<template>
  <transition name="modal">
    <modal
      v-if="showModal"
      @close="showModal = false"
      :color="`border-${ticket.color}`"
    >
      <template v-slot:title>
        <span class="text-2xl">
          {{ $t("my_call_modal_ticket", { ticket: ticket?.ticket }) }}
        </span>
      </template>

      <template v-slot:body>
        <div>
          <Acordion :items="ticket?.details" />
        </div>
      </template>

      <template v-if="ticket.status === STATUS.encerrado" v-slot:footer>
        <p-button
          :label="$t('open_ticket')"
          :color="STATUS.reaberto.toLowerCase()"
          type="submit"
          @click="replay"
        />
      </template>
    </modal>
  </transition>

  <container
    :title="$t('call_title')"
    :detail="$t('call_title_detail')"
    :loading="loading"
  >
    <template v-slot:header>
      <div
        class="sm:ml-auto sm:grid w-full sm:grid-cols-5 sm:items-center sm:justify-center sm:gap-1 gap-2 sm:mb-0 mb-12"
      >
        <field-input
          :label="$t('call_search')"
          name="search"
          type="text"
          autocomplete="search"
          id="search"
          v-model="word"
          :required="false"
          :disabled="!listCall.length"
          container-custom="w-full sm:col-span-4 sm:mb-0 mb-2"
          class-custom="border border-gray-04 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-03 w-full disabled:cursor-no-drop disabled:text-gray-02 text-text"
        />
        <div class="sm:col-span-1">
          <p-button
            label=""
            type="submit"
            icon="PhMagnifyingGlass"
            class-custom="sm:w-12  rounded-full p-4  flex justify-center sm:mr-4"
            @click="() => search()"
            :disabled="!listCall.length"
          />
        </div>
      </div>
    </template>
    <call-list
      :listCall="listCall"
      :nextTicket="nextTicket"
      :pagination="{
        totalPages: totalPages,
        pageSize: pageSize,
        currentPage: currentPage,
      }"
      :page-changed="pageChanged"
    />
  </container>
</template>

<script lang="ts">
import { PhArrowsClockwise, PhCheck, PhTicket } from "@phosphor-icons/vue";
import { RouterView, useRoute } from "vue-router";
import { computed, ref } from "vue";
import { mapActions } from "pinia";

import Container from "@/components/Container.vue";
import Modal from "@/components/Modal.vue";
import Acordion from "@/components/Acordion.vue";
import CallList from "@/components/CallList.vue";
import { FieldInput } from "@/components/Filds/index";
import PButton from "@/components/Button.vue";

import { useMyCalls } from "@/store/module_chamados";
import { STATUS } from "@/constants/utils";
import { useHelpDesk } from "@/store/module_helpdesk";

export default {
  components: {
    Container,
    PhCheck,
    PhTicket,
    PhArrowsClockwise,
    RouterView,
    Modal,
    Acordion,
    CallList,
    FieldInput,
    PButton,
  },
  setup() {
    const pageSize = 15;

    const myCalls = useMyCalls();
    myCalls.getCalls(pageSize, 1);

    const route: any = useRoute();
    const showModal: any = ref(false);

    const handleGetTicket = async (id: number = route.params.id) => {
      await myCalls.getMyCall(id);
      showModal.value = true;
    };

    if (route.params.id) {
      handleGetTicket();
    }

    const listCall: any = computed(() => myCalls.listCall);
    const totalPages: any = computed(() => myCalls.totalPages);
    const currentPage: any = computed(() => myCalls.currentPage);
    const loading: any = computed(() => myCalls.loading);
    const ticket: any = computed(() => myCalls.ticket);

    return {
      listCall,
      myCalls,
      pageSize,
      totalPages,
      currentPage,
      loading,
      showModal,
      ticket,
      handleGetTicket,
    };
  },
  data() {
    return {
      word: "",
      STATUS: STATUS,
    };
  },
  methods: {
    ...mapActions(useHelpDesk, ["setIsReplay"]),
    ...mapActions(useHelpDesk, ["setTicket"]),

    async search() {
      if (this.word) {
        await this.myCalls.search(this.word);
      } else {
        this.pageChanged(1);
      }
    },
    nextTicket(item: any) {
      this.handleGetTicket(item.id);
    },
    async pageChanged(currentPage: number) {
      await this.myCalls.getCalls(this.pageSize, currentPage);
    },
    replay() {
      this.setTicket(this.$t("ticket_replay", { ticket: this.ticket?.ticket }));
      this.setIsReplay(true);
      this.$router.push("help-desk");
    },
  },
};
</script>