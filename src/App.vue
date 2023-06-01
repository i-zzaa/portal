<script lang="ts">
import { RouterView } from "vue-router";
import PFooter from "@/components/Footer.vue";

export default {
  components: { RouterView, PFooter },
};
</script>

<template>
  <router-view name="PNav"></router-view>

  <v-content>
    <router-view></router-view>
  </v-content>
  <p-footer />
</template>
