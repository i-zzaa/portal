<template>
  <transition name="modal">
    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:body> Teste </template>
    </modal>
  </transition>

  <div class="h-screen w-full p-8 mt-12 text-center">
    <h1 class="text-2xl font-ligth m-12 text-title">
      {{ $t("call_title") }}
      <span class="font-light"> {{ $t("call_title_detail") }}</span>
    </h1>

    <ul class="flex flex-wrap gap-6 justify-center">
      <li v-for="(item, index) in listCall" :key="index" class="">
        <ticket
          @click="showModal = true"
          :color="`${status[item.status.toLowerCase()].color}-01`"
        >
          <template v-slot:title>
            <div class="grid">
              <span
                class="h-6 w-6 rounded-full flex items-center justify-center -mt-8"
                :class="`bg-${status[item.status.toLowerCase()].color}-01`"
              >
                <component
                  :is="status[item.status.toLowerCase()].icon"
                  class="h-4 w-4 text-white"
                />
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
import Ticket from "@/components/Ticket.vue";
import Modal from "@/components/Modal.vue";
import { useMyCalls } from "@/store/module_chamados";
import { PhArrowsClockwise, PhCheck } from "@phosphor-icons/vue";
import { RouterView } from "vue-router";
import { computed } from "vue";

export default {
  components: { Ticket, PhCheck, PhArrowsClockwise, RouterView, Modal },
  setup() {
    const myCalls = useMyCalls();
    myCalls.getCalls();

    const listCall = computed(() => myCalls.listCall);

    const status = {
      reaberto: { color: "orange", icon: "PhArrowsClockwise" },
      encerrado: { color: "blue", icon: "PhCheck" },
    };

    return {
      listCall,
      status,
    };
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    nextTicket() {},
  },
};
</script>