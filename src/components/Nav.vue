<template>
  <nav
    class="sm:grid hidden grid-cols-2 items-center px-6 rounded-full border border-gray-03 shadow-md justify-end h-20 m-4"
  >
    <div class="bg-logo-01 bg-no-repeat bg-contain h-12"></div>

    <div class="grid items-center grid-cols-3 h-full">
      <ul class="flex space-x-12 col-span-2 h-full items-center">
        <li
          v-for="(item, index) in routesCurrent"
          :key="index"
          class="flex items-center gap-2 h-full relative"
        >
          <RouterLink
            class="text-sm text-primary hover:opacity-80"
            :to="item.to"
            >{{ item.label.toUpperCase() }}</RouterLink
          >
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

  <header
    class="sm:hidden relative before:content-center before:fixed before:top-[-100px] before:right-[-10%] before:w-[200px] before:h-[200px] before:bg-primary before:rounded-full duration-700"
  >
    <label for="menuCheck" class="menu-icon cursor-pointer p-2 rounded-md">
      <ph-list
        :size="35"
        class="absolute right-4 top-[35%] cursor-pointer text-white active:scale-125 duration-700"
        @click="menuHamburguerActive = true"
        v-if="!menuHamburguerActive"
      />

      <ph-x
        :size="35"
        class="absolute right-4 top-4 cursor-pointer text-white active:-scale-125 duration-700 z-[999]"
        @click="menuHamburguerActive = false"
        v-else
      />
    </label>

    <ul
      class="menu-list fixed items-center w-[150vw] h-[150vh] rounded-full bg-primary text-white duration-500"
      :class="{
        'top-[50%]': menuHamburguerActive,
        'left-[50%]': menuHamburguerActive,
        'transform-translate': menuHamburguerActive,
        'z-[998]': menuHamburguerActive,
      }"
      v-if="menuHamburguerActive"
    >
      <li>Home</li>
      <li>Products</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </header>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import {
  PhSignOut,
  PhHouse,
  PhTicket,
  PhNewspaper,
  PhList,
  PhX,
} from "@phosphor-icons/vue";

export default {
  components: {
    RouterLink,
    PhSignOut,
    PhHouse,
    PhTicket,
    PhNewspaper,
    PhList,
    PhX,
  },
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
      menuHamburguerActive: false,
    };
  },
};
</script>

<style>
.router-link-active {
  font-weight: 700;
}

.router-link-active::after {
  content: "◦";
  left: 50%;
  bottom: 0;
}
.router-link-active::before {
  content: "◦";
  left: 50%;
  bottom: 0;
}
</style>