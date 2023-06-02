<template>
  <transition name="modal">
    <modal
      v-if="showModal"
      @close="showModal = false"
      :color="`${ticket.color}-01`"
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

  <div class="w-full p-8">
    <h1 class="text-2xl font-ligth mb-12 text-title ml-40">
      {{ $t("call_title") }}
      <span class="font-light"> {{ $t("call_title_detail") }}</span>
    </h1>

    <call-cards
      :listCall="listCall"
      :nextTicket="nextTicket"
      v-if="listCall.lenght > 5"
    />
    <call-list :listCall="listCall" :nextTicket="nextTicket" v-else />
  </div>
  <div></div>
</template>

<script lang="ts">
import { PhArrowsClockwise, PhCheck, PhTicket } from "@phosphor-icons/vue";
import { RouterView } from "vue-router";
import { computed } from "vue";

import Ticket from "@/components/Ticket.vue";
import Modal from "@/components/Modal.vue";
import Acordion from "@/components/Acordion.vue";
import CallCards from "@/components/CallCards.vue";
import CallList from "@/components/CallList.vue";

import { useMyCalls } from "@/store/module_chamados";
import { STATUS } from "@/constants/utils";

export default {
  title: "Meus Chamados",
  components: {
    Ticket,
    PhCheck,
    PhTicket,
    PhArrowsClockwise,
    RouterView,
    Modal,
    Acordion,
    CallCards,
    CallList,
  },
  setup() {
    const myCalls = useMyCalls();
    myCalls.getCalls();

    const listCall: any = computed(() => {
      return myCalls.listCall.map((item: any) => {
        switch (item.status) {
          case STATUS.reaberto:
            item.color = "orange";
            item.icon = "PhArrowsClockwise";
            break;
          case STATUS.encerrado:
            item.color = "blue";
            item.icon = "PhCheck";
            break;
          case STATUS.resolvido:
            item.color = "green";
            item.icon = "PhCheck";
            break;
          case STATUS.novo:
            item.color = "blue";
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
        color: "gray",
        detail: [],
      },
    };
  },
  methods: {
    nextTicket(item: any) {
      this.ticket = item;
      this.showModal = true;
    },
  },
};
</script>