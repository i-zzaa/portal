<template>
  <ul class="grid flex-wrap gap-2">
    <li v-for="(item, index) in listCall" :key="index" class="w-full">
      <list
        @click="() => nextTicket(item)"
        :color="`border-${item?.status.toLowerCase()}`"
        list
      >
        <div class="relative">
          <div class="grid gap-1">
            <span
              class="absolute sm:top-[95%] top-[50%] -left-10 h-6 w-6 rounded-full flex items-center justify-center -mt-8"
              :class="`${item?.status.toLowerCase()}`"
            >
              <component :is="item?.icon" class="h-4 w-4 text-white" />
            </span>
          </div>
          <div
            class="sm:flex flex-wrap grid sm:gap-2 gap-4 items-start justify-between text-sm text-primary"
          >
            <div class="grid gap-1">
              <span class="font-semibold"> Ticket </span>
              <span> {{ item?.ticket }} </span>
            </div>

            <div class="grid gap-1">
              <span class="font-semibold"> Status </span>
              <span class="flex items-center">
                {{ item?.status }}
              </span>
            </div>

            <div class="grid gap-1">
              <span class="font-semibold"> Título </span>
              <span> {{ item?.title }} </span>
            </div>
            <div class="grid gap-1">
              <span class="font-semibold"> Tipo </span>
              <span> {{ item?.tipo }} </span>
            </div>
            <div class="grid gap-1">
              <span class="font-semibold"> Prioridade </span>
              <span> {{ item?.prioridade }} </span>
            </div>
            <div class="grid gap-1">
              <span class="font-semibold"> Data </span>
              <span> {{ item?.date }} </span>
            </div>
          </div>
        </div>
      </list>
    </li>
  </ul>
</template>

<script lang="ts">
import { PhArrowsClockwise, PhCheck, PhTicket } from "@phosphor-icons/vue";
import { RouterView } from "vue-router";

import List from "@/components/List.vue";
import Modal from "@/components/Modal.vue";
import Acordion from "@/components/Acordion.vue";

export default {
  title: "Meus Chamados",
  props: {
    nextTicket: { type: Function, required: true },
    listCall: { type: Array<any>, required: true },
  },
  components: {
    List,
    PhCheck,
    PhTicket,
    PhArrowsClockwise,
    RouterView,
    Modal,
    Acordion,
  },
};
</script>

<style scoped>
</style>