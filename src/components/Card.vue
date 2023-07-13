<template>
  <div
    class="bg-white border-t-8 bg-clip-border rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-lg hover:cursor-pointer hover:scale-110 duration-700 grid min-w-[14rem]"
    :class="`border-${color}`"
  >
    <div
      class="text-slate-900 dark:text-white font-medium tracking-tight row-span-1"
    >
      <slot name="title"></slot>
    </div>
    <p class="text-slate-500 text-sm">
      <slot></slot>
    </p>
    <div class="fized bottom-0"><slot name="footer"></slot></div>
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