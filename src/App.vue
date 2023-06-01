<script lang="ts">
import { RouterView } from "vue-router";

export default {
  components: { RouterView },
};
</script>

<template>
  <div class="grid grid-rows-8 h-screen">
    <router-view name="PNav"></router-view>
    <v-content class="row-span-6 overflow-y-auto">
      <router-view></router-view>
    </v-content>
    <router-view name="PFooter" class="row-span-1"></router-view>
  </div>
</template>
