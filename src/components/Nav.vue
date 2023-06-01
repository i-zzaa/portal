<template>
  <nav
    class="grid grid-cols-2 items-center px-6 py-2 rounded-lg shadow-md justify-end h-20"
  >
    <div class="bg-logo-01 bg-no-repeat bg-contain h-12"></div>

    <div class="grid items-center grid-cols-3">
      <ul class="flex space-x-12 col-span-2 h-full items-center">
        <li
          v-for="(item, index) in routesCurrent"
          :key="index"
          class="active:underline flex items-center gap-2"
        >
          <!-- <component :is="item.icon" class="h-6 w-6" /> -->
          <RouterLink class="text-sm" :to="item.to">{{
            item.label.toUpperCase()
          }}</RouterLink>
        </li>
      </ul>
      <div class="flex justify-end col-start-12">
        <ph-sign-out
          :size="20"
          class="text-right text-primary hover:opacity-70 hover:cursor-pointer hover:scale-105"
          @click="$router.push('/login')"
        />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import { PhSignOut, PhHouse, PhTicket, PhNewspaper } from "@phosphor-icons/vue";

export default {
  components: { RouterLink, PhSignOut, PhHouse, PhTicket, PhNewspaper },
  props: {
    label: String,
    onclick: Function,
    color: String,
  },

  data() {
    return {
      routesCurrent: [
        { label: "início", icon: "PhHouse", to: "/home" },
        {
          label: "Solicite um atendimento",
          icon: "PhTicket",
          to: "/help-desk",
        },
        { label: "Meus chamados", icon: "PhNewspaper", to: "/meus-chamados" },
      ],
    };
  },
};
</script>

<style>
</style>