<template>
  <footer class="grid grid-cols-7 items-center px-6 py-2 bg-blue-01">
    <ul class="flex space-x-8 col-span-5 h-full items-center">
      <li
        v-for="(item, index) in routesCurrent"
        :key="index"
        class="flex items-center gap-2"
      >
        <!-- <component :is="item.component" /> -->
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
export default {
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