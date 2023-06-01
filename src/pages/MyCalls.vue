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

  <div class="h-screen w-full p-8 mt-12 text-center">
    <h1 class="text-2xl font-ligth m-12 text-title">
      {{ $t("call_title") }}
      <span class="font-light"> {{ $t("call_title_detail") }}</span>
    </h1>

    <ul class="flex flex-wrap gap-6 justify-center">
      <li v-for="(item, index) in listCall" :key="index" class="">
        <ticket @click="() => nextTicket(item)" :color="`${item.color}-01`">
          <template v-slot:title>
            <div class="grid">
              <span
                class="h-6 w-6 rounded-full flex items-center justify-center -mt-8"
                :class="`bg-${item.color}-01`"
              >
                <component :is="item.icon" class="h-4 w-4 text-white" />
              </span>

              <div>
                <span title="Ticket">{{ item.ticket }}</span>
              </div>
            </div>
            <hr class="bg-primary w-full mt-4" />
          </template>

          <div class="mt-8">
            <div class="grid items-center gap-2 text-sm text-start">
              <span><b>Título: </b>{{ item.title }}</span>
              <span><b>Tipo: </b> {{ item.tipo }}</span>
              <span><b>Prioridade: </b> {{ item.prioridade }}</span>
            </div>
          </div>

          <template v-slot:footer>
            <span class="text-xs text-gray-02 flex items-end">
              {{ item.date }}
            </span>
          </template>
        </ticket>
      </li>
    </ul>
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

import { useMyCalls } from "@/store/module_chamados";
import { STATUS } from "@/constants/utils";

export default {
  components: {
    Ticket,
    PhCheck,
    PhTicket,
    PhArrowsClockwise,
    RouterView,
    Modal,
    Acordion,
  },
  setup() {
    const myCalls = useMyCalls();
    myCalls.getCalls();

    const listCall = computed(() => {
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