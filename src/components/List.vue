<template>
  <div
    class="bg-white bg-clip-borde border-l-8 w-full rounded-lg px-6 py-6 ring-1 ring-slate-900/5 hover:shadow-lg hover:cursor-pointer hover:scale-110 duration-700 grid"
    :class="color"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    color: String,
  },
};
</script>

<style>
</style>