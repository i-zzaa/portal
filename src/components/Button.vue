<template>
  <button
    :type="type"
    class="flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    :class="`bg-${color}`"
    @click="onclick && onclick"
  >
    {{ label?.toUpperCase() }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    onclick: Function,
    color: String,
    type: String,
  },
};
</script>

<style>
</style>