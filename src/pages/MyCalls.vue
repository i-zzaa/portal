<template>
  <transition name="modal">
    <modal
      v-if="showModal"
      @close="showModal = false"
      :color="`border-${ticket?.status.toLowerCase()}`"
    >
      <template v-slot:title>
        <span class="text-2xl">
          Detalhes do Ticket nº {{ ticket?.ticket }}</span
        >
      </template>

      <template v-slot:body>
        <div>
          <Acordion :items="ticket?.detail" />
        </div>
      </template>
    </modal>
  </transition>

  <container :title="$t('call_title')" :detail="$t('call_title_detail')">
    <template v-slot:header>
      <div
        class="w-full ml-auto grid grid-cols-5 items-center justify-center gap-1"
      >
        <field-input
          :label="$t('call_search')"
          name="search"
          type="text"
          autocomplete="search"
          id="search"
          v-model="word"
          :required="false"
          container-custom="w-full col-span-4"
          class-custom="border border-gray-04 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-03 w-full disabled:cursor-no-drop disabled:text-gray-02 text-text"
        />
        <div class="col-span-1">
          <p-button
            label=""
            color="primary"
            type="submit"
            icon="PhMagnifyingGlass"
            class-custom="w-8 h-8 rounded-full p-4"
          />
        </div>
      </div>
    </template>
    <call-cards
      :listCall="listCall"
      :nextTicket="nextTicket"
      v-if="listCall.lenght < 10"
    />
    <call-list :listCall="listCall" :nextTicket="nextTicket" v-else />
  </container>
</template>

<script lang="ts">
import { PhArrowsClockwise, PhCheck, PhTicket } from "@phosphor-icons/vue";
import { RouterView } from "vue-router";
import { computed } from "vue";

import Container from "@/components/Container.vue";
import Ticket from "@/components/Ticket.vue";
import Modal from "@/components/Modal.vue";
import Acordion from "@/components/Acordion.vue";
import CallCards from "@/components/CallCards.vue";
import CallList from "@/components/CallList.vue";
import { FieldInput } from "@/components/Filds/index";
import PButton from "@/components/Button.vue";

import { useMyCalls } from "@/store/module_chamados";
import { STATUS } from "@/constants/utils";

export default {
  title: "Meus Chamados",
  components: {
    Container,
    Ticket,
    PhCheck,
    PhTicket,
    PhArrowsClockwise,
    RouterView,
    Modal,
    Acordion,
    CallCards,
    CallList,
    FieldInput,
    PButton,
  },
  setup() {
    const myCalls = useMyCalls();
    myCalls.getCalls();

    const listCall: any = computed(() => {
      return myCalls.listCall.map((item: any) => {
        switch (item.status) {
          case STATUS.reaberto:
            item.icon = "PhArrowsClockwise";
            break;
          case STATUS.encerrado:
            item.icon = "PhCheck";
            break;
          case STATUS.resolvido:
            item.icon = "PhCheck";
            break;
          case STATUS.novo:
            item.icon = "PhTicket";
            break;
          default:
            break;
        }

        return item;
      });
    });

    return {
      listCall,
    };
  },
  data() {
    return {
      showModal: false,
      ticket: {
        ticket: "",
        status: "",
        detail: [],
      },
      word: "",
    };
  },
  methods: {
    search(item: any) {
      this.ticket = item;
      this.showModal = true;
    },
    nextTicket(item: any) {
      this.ticket = item;
      this.showModal = true;
    },
  },
};
</script>