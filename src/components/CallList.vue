<template>
  <div v-if="listCall.length">
    <ul class="grid flex-wrap gap-2">
      <li v-for="(item, index) in listCall" :key="index" class="w-full">
        <list
          @click="() => nextTicket(item)"
          :color="`border-${item?.color}`"
          list
          @mouseenter="() => (item.show = true)"
          @mouseleave="() => (item.show = false)"
        >
          <div class="relative">
            <div class="grid gap-1">
              <span
                class="absolute sm:top-[95%] top-[50%] -left-10 h-6 w-6 rounded-full flex items-center justify-center -mt-8"
                :class="`${item?.color}`"
              >
                <component :is="item?.icon" class="h-4 w-4 text-white" />
              </span>
            </div>
            <div
              class="flex flex-wrap sm:gap-2 gap-4 items-start justify-between text-sm text-primary"
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
                <span> {{ item?.type }} </span>
              </div>
              <div class="grid gap-1">
                <span class="font-semibold"> Prioridade </span>
                <span> {{ item?.priority }} </span>
              </div>
              <div class="grid gap-1">
                <span class="font-semibold"> Data </span>
                <span> {{ item?.date }} </span>
              </div>
            </div>
            <div v-if="item.show" class="w-full mt-4">
              <span class="font-semibold mb-2">{{ $t("details_ticket") }} </span
              ><br />
              <span> {{ item?.detail }} </span>
            </div>
          </div>
        </list>
      </li>
    </ul>

    <pagination
      :totalPages="pagination.totalPages || 1"
      :pageSize="pagination.pageSize"
      :currentPage="pagination.currentPage"
      :pageChanged="pageChanged"
    />
  </div>

  <empty v-else />
</template>

<script lang="ts">
import { PhArrowsClockwise, PhCheck, PhTicket } from "@phosphor-icons/vue";
import { RouterView } from "vue-router";

import List from "@/components/List.vue";
import Modal from "@/components/Modal.vue";
import Acordion from "@/components/Acordion.vue";
import Empty from "@/components/Empty.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  title: "Meus Chamados",
  props: {
    nextTicket: { type: Function, required: true },
    listCall: { type: Array<any>, required: true },
    pageChanged: { type: Function, required: true },
    pagination: { type: Object, required: true },
  },
  components: {
    List,
    Pagination,
    PhCheck,
    PhTicket,
    PhArrowsClockwise,
    RouterView,
    Modal,
    Acordion,
    Empty,
  },
};
</script>

<style scoped>
</style>