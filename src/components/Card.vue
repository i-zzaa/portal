<template>
  <div
    class="bg-white dark:bg-slate-800 bg-clip-borde rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-lg hover:cursor-pointer hover:scale-110 duration-700 h-72 w-64"
  >
    <h3
      class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
    >
      <slot name="title"></slot>
    </h3>
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      <slot></slot>
    </p>
  </div>
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