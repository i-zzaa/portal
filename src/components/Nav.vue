<template>
  <nav
    class="sm:grid hidden grid-cols-2 items-center px-6 rounded-full border border-gray-03 shadow-md justify-end h-20 m-4"
  >
    <div class="bg-logo-01 bg-no-repeat bg-contain h-12"></div>

    <div class="grid items-center grid-cols-3 h-full">
      <ul class="flex col-span-2 h-full items-center gap-8">
        <li
          v-for="(item, index) in routesCurrent"
          :key="index"
          class="flex items-center gap-2 h-full relative min-w-[5rem] nowrap"
        >
          <RouterLink
            class="text-sm text-primary hover:opacity-80 text-ellipsis overflow-hidden"
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
    class="sm:hidden relative before:content-center before:fixed before:top-[-100px] before:right-[-5rem] before:w-[200px] before:h-[200px] before:bg-primary before:rounded-full duration-700 before:z-2"
    :class="{
      'before:bg-primary': !menuHamburguerActive,
      'before:bg-primary-opacity': menuHamburguerActive,
    }"
  >
    <label for="menuCheck" class="menu-icon cursor-pointer p-2 rounded-md">
      <ph-list
        :size="35"
        class="absolute right-4 top-[35%] cursor-pointer text-white active:scale-125 duration-700 before:z-2"
        @click="menuHamburguerActive = true"
        v-if="!menuHamburguerActive"
      />

      <ph-x
        :size="35"
        class="absolute right-4 top-4 cursor-pointer text-white active:-scale-125 duration-700 z-[999] before:z-2"
        @click="menuHamburguerActive = false"
        v-else
      />
    </label>

    <div>
      <ul
        class="menu-list fixed items-center w-[150vw] h-[150vh] rounded-full bg-primary-opacity text-white duration-500 space-y-5 text-center backdrop-filter backdrop-blur-sm bg-opacity-75 transition-all"
        :class="{
          'top-[50%]': menuHamburguerActive,
          'left-[50%]': menuHamburguerActive,
          'transform-translate': menuHamburguerActive,
          'z-[998]': menuHamburguerActive,
          'px-[10rem]': menuHamburguerActive,
          'py-[20rem]': menuHamburguerActive,
        }"
        v-if="menuHamburguerActive"
      >
        <li class="flex justify-center">
          <div
            class="bg-logo-01 bg-center bg-no-repeat bg-contain h-24 w-40"
          ></div>
        </li>
        <li
          v-for="(item, index) in routesCurrent"
          :key="index"
          class="hover:scale-105 transition-all duration-700"
        >
          <RouterLink
            class="text-sm text-white hover:opacity-80 text-ellipsis overflow-hidden"
            :to="item.to"
            >{{ item.label.toUpperCase() }}</RouterLink
          >
        </li>
        <li
          class="flex items-center justify-center gap-2 mt-48 hover:opacity-70 hover:cursor-pointer hover:scale-105"
          @click="handleLogout"
        >
          {{ $t("ENUM.logout") }}
          <ph-sign-out :size="20" class="text-right text-white" />
        </li>
      </ul>
    </div>
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
import { mapActions } from "pinia";
import { useAuth } from "@/store/module_login";

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
        { label: "início", icon: "PhHouse", to: "/" },
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
  methods: {
    ...mapActions(useAuth, ["logout"]),
    handleLogout() {
      this.$router.push("/login");
      this.menuHamburguerActive = false;
      this.logout();
    },
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
.router-link-active a {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.menu-list {
  transition: top 0.4s, left 0.4s, transform 0.4s !important;
}

.transform-translate {
  transform: translate(-50%, -50%);
}

.backdrop {
  background-color: #022e49c9;
  backdrop-filter: blur(8px);
}
</style>