<script lang="ts">
import { RouterView } from "vue-router";
import PNav from "@/components/Nav.vue";
import PFooter from "@/components/Footer.vue";

export default {
  components: { RouterView, PNav, PFooter },
  setup() {
    return {};
  },
};
</script>

<template>
  <p-nav />
  <v-content>
    <router-view></router-view>
  </v-content>
  <p-footer />
</template>
