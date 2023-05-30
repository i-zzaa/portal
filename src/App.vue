<script lang="ts">
import { RouterView } from "vue-router";

export default {
  components: { RouterView },
  setup() {
    return {};
  },
};
</script>

<template>
  <!-- <router-view name="DHeader"></router-view> -->

  <v-content>
    <!-- <router-view name="DSidebar"></router-view> -->
    <router-view></router-view>
  </v-content>
</template>
