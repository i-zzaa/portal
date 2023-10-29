<template>
  <div class="w-full max-w-md mx-auto grid gap-2">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="bg-white bg-clip-border rounded-lg px-2 py-1 ring-1 ring-slate-900/5 hover:shadow-lg hover:cursor-pointer hover:scale-110 duration-700"
    >
      <button
        @click="toggle(index)"
        class="w-full px-8 py-6 flex justify-between"
      >
        <div class="w-full text-left flex gap-2 justify-start">
          <span
            class="h-6 w-6 rounded-full flex items-center justify-center"
            :class="`${item.color}`"
          >
            <component :is="item.icon" class="h-4 w-4 text-white" />
          </span>
          <h2 class="font-bold text-lg">{{ item.title }}</h2>
          <h2 class="font-bold text-lg">{{ item.status }}</h2>
        </div>
        <ph-caret-down
          :size="18"
          weight="bold"
          class="duration-700 hover:cursor-pointer hover:scale-110"
          :class="{ 'rotate-180': activeIndex === index }"
        />
      </button>
      <div v-show="activeIndex === index" class="px-8 pb-6">
        <div class="grid items-center gap-2 text-sm text-start">
          <span><b>Fila: </b>{{ item.queue }}</span>
          <span><b>Atendente: </b> {{ item.attendant }}</span>
          <span><b>Detalhe: </b> {{ item.detail }}</span>
          <span><b>Data: </b> {{ item.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  PhArrowsClockwise,
  PhCheck,
  PhTicket,
  PhCaretDown,
} from "@phosphor-icons/vue";

export default {
  components: { PhArrowsClockwise, PhCheck, PhTicket, PhCaretDown },
  props: {
    items: { type: Array<any>, required: true },
  },

  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    toggle(index: number) {
      this.activeIndex = index;
    },
  },
};
</script>

