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
  },
  setup() {
    const myCalls = useMyCalls();
    myCalls.getCalls();

    const listCall: any = computed(() => {
      return myCalls.listCall.map((item: any) => {
        switch (item.status) {
          case STATUS.reaberto:
            item.color = "border-orange-01";
            item.icon = "PhArrowsClockwise";
            break;
          case STATUS.encerrado:
            item.color = "border-blue-01";
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