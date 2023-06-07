<template>
  <div class="w-full max-w-md mx-auto grid gap-2">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="bg-white bg-clip-borde rounded-lg px-2 py-1 ring-1 ring-slate-900/5 hover:shadow-lg hover:cursor-pointer hover:scale-110 duration-700"
    >
      <button
        @click="toggle(index)"
        class="w-full px-8 py-6 flex justify-between"
      >
        <div class="w-full text-left flex gap-2 justify-start">
          <span
            class="h-6 w-6 rounded-full flex items-center justify-center"
            :class="`${item?.status.toLowerCase()}`"
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
          <span><b>Fila: </b>{{ item.fila }}</span>
          <span><b>Atendente: </b> {{ item.atendente }}</span>
          <span><b>Detalhe: </b> {{ item.detalhe }}</span>
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
import { computed } from "vue";
import { STATUS } from "@/constants/utils";

export default {
  components: { PhArrowsClockwise, PhCheck, PhTicket, PhCaretDown },
  props: {
    items: { type: Array, required: true },
  },
  setup(props: any) {
    const list = computed(() => {
      return props.items.map((item: any) => {
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
      list,
    };
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

<style scoped>
/* Aqui você pode adicionar estilos específicos se necessário, utilizando a sintaxe do Tailwind CSS */
</style>
