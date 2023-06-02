<template>
  <div
    form="account"
    class="mx-auto flex flex-col w-[85%] min-w-0 p-24 break-words bg-white border-0 dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border"
  >
    <ul class="grid flex-wrap gap-2">
      <li v-for="(item, index) in listCall" :key="index" class="w-full">
        <list
          @click="() => nextTicket(item)"
          :color="`border-${item?.color}-01`"
          list
        >
          <div class="">
            <div
              class="flex items-start justify-between gap-2 text-sm text-primary"
            >
              <div class="grid gap-1">
                <span class="font-semibold"> Ticket </span>
                <span> {{ item?.ticket }} </span>
              </div>

              <div class="grid gap-1">
                <span class="font-semibold"> Status </span>
                <span class="flex items-center">
                  {{ item?.status }}
                  <component :is="item?.icon" class="h-4 w-4 text-white" />
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
  </div>
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

<style>
.items:not(:last-child)::after {
  content: "|";
  padding-left: 2.5em;
}
</style>