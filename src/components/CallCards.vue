<template>
  <ul class="flex flex-wrap gap-6 justify-center">
    <li v-for="(item, index) in listCall" :key="index" class="">
      <ticket
        @click="() => nextTicket(item)"
        :color="`${item?.status.toLowerCase()}`"
      >
        <template v-slot:title>
          <div class="grid">
            <span
              class="h-6 w-6 rounded-full flex items-center justify-center -mt-8"
              :class="`${item?.status.toLowerCase()}`"
            >
              <component :is="item?.icon" class="h-4 w-4 text-white" />
            </span>

            <div>
              <span title="Ticket">{{ item?.ticket }}</span>
            </div>
          </div>
          <hr class="bg-primary w-full mt-4" />
        </template>

        <div class="mt-8">
          <div class="grid items-center gap-2 text-sm text-start">
            <span><b>Título: </b>{{ item?.title }}</span>
            <span><b>Tipo: </b> {{ item?.tipo }}</span>
            <span><b>Prioridade: </b> {{ item?.prioridade }}</span>
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
</template>

<script lang="ts">
import { PhArrowsClockwise, PhCheck, PhTicket } from "@phosphor-icons/vue";
import { RouterView } from "vue-router";

import Ticket from "@/components/Ticket.vue";
import Modal from "@/components/Modal.vue";
import Acordion from "@/components/Acordion.vue";

export default {
  title: "Meus Chamados",
  props: {
    nextTicket: { type: Function, required: true },
    listCall: { type: Array<any>, required: true },
  },
  components: {
    Ticket,
    PhCheck,
    PhTicket,
    PhArrowsClockwise,
    RouterView,
    Modal,
    Acordion,
  },
};
</script>