<template>
  <footer class="bg-blue-02">
    <ul class="grid grid-cols-3 h-full w-full text-white">
      <li class="flex items-center gap-2 justify-center">
        <span class="leading-4 flex gap-2 items-center"> MENU PRINCIPAIS </span>
      </li>
      <li class="grid items-center leading-4">
        <span>CENTRAL DE ATENDIMENTO </span>
        <span class="text-xs leading-4 flex gap-2 items-center">
          <ph-map-pin
            :size="10"
            weight="bold"
            class="duration-700 hover:cursor-pointer hover:scale-110"
          />
          Prodam - Empresa de Tecnologia da Informação e Comunicação do
          Município de São Paulo</span
        >
        <span class="text-xs leading-4 flex gap-2 items-center">
          <ph-phone
            :size="10"
            weight="bold"
            class="duration-700 hover:cursor-pointer hover:scale-110"
          />

          Telefone: 61 3246-6340
        </span>
        <span class="text-xs leading-4 flex gap-2 items-center">
          <ph-at
            :size="10"
            weight="bold"
            class="duration-700 hover:cursor-pointer hover:scale-110"
          />
          atendimento-prodam@ios.com.br
        </span>
      </li>
      <li class="p-2">
        <div class="bg-logo-02 bg-no-repeat bg-contain h-24 w-48"></div>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { PhMapPin, PhPhone, PhAt } from "@phosphor-icons/vue";

export default {
  components: { PhMapPin, PhPhone, PhAt },
  props: {
    label: String,
    onclick: Function,
    color: String,
  },

  data() {
    return {
      routesCurrent: [
        { component: "início", icon: "PhHouse", to: "/home" },
        {
          component: "Solicite um atendimento",
          icon: "PhTicket",
          to: "/help-desk",
        },
        {
          component: "Meus chamados",
          icon: "PhNewspaper",
          to: "/meus-chamados",
        },
      ],
    };
  },
};
</script>

<style>
</style>