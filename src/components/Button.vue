<template>
  <button
    onclick="onclick"
    type="button"
    class="flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    :class="`bg-${color}`"
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
  },
};
</script>

<style>
</style>