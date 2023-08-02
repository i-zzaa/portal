<template>
  <div class="w-full max-w-full px-3 text-center [flex:0_0_auto]">
    <Step3 :hasButtonPrev="false" />
  </div>
</template>

<script lang="ts">
import Step3 from "@/forms/step3.vue";

export default {
  components: { Step3 },
};
</script>

<style>
</style>