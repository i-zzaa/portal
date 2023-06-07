<template>
  <div
    class="bg-white border-t-8 bg-clip-borde rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-lg hover:cursor-pointer hover:scale-110 duration-700 h-72 w-64 grid grid-rows-5"
    :class="`border-${color}`"
  >
    <div
      class="text-slate-900 dark:text-white mt-5 font-medium tracking-tight row-span-1"
    >
      <slot name="title"></slot>
    </div>
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      <slot></slot>
    </p>
    <div class="row-start-5 flex justify-end"><slot name="footer"></slot></div>
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