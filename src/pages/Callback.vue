<template></template>

<script lang="ts">
import { useAuth } from "@/store/module_login";
import { useRoute } from "vue-router";
export default {
  setup() {
    const auth = useAuth();
    const route = useRoute();

    if (route.query?.code) {
      async () => await auth.getTokenGov(route.query?.code);
    }

    return {
      auth,
    };
  },
};
</script>

<style>
</style>