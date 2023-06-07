<template>
  <footer class="fixed bottom-0 w-full bg-primary">
    <ul class="flex justify-between w-full text-white px-4 py-2">
      <li class="flex items-center gap-2 justify-center">
        <span class="leading-4 flex gap-2 items-center text-xs">
          <ph-map-pin :size="10" weight="bold" class="duration-700" />
          {{ $t("footer_location") }}</span
        >
      </li>
      <li class="grid items-center leading-4">
        <span class="text-xs leading-4 flex gap-2 items-center">
          <ph-phone :size="10" weight="bold" class="duration-700" />

          {{ $t("footer_tel") }}
        </span>
      </li>
      <li class="grid items-center leading-4">
        <span class="text-xs leading-4 flex gap-2 items-center">
          <ph-at :size="10" weight="bold" class="duration-700" />
          crm@i9atech.com
        </span>
      </li>
      <!-- <li class="p-2">
        <div class="bg-logo-02 bg-no-repeat bg-contain h-24 w-48"></div>
      </li> -->
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