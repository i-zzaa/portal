<template>
  <div
    class="flex flex-col w-2/3 mx-auto py-4 px-8 break-words bg-white dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border"
  >
    <div class="flex flex-wrap -mx-3 text-start">
      <div class="w-full [flex:0_0_auto] grid grid-cols-3 justify-between">
        <h1
          class="text-3xl font-ligth my-12 text-title sm:col-span-2 col-span-3"
        >
          {{ title }}
          <span class="font-light"> {{ detail }}</span>
        </h1>

        <slot name="header"></slot>
      </div>
    </div>
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    detail: String,
  },
};
</script>

<style>
</style>