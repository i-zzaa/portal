<template>
  <div
    class="flex flex-col sm:w-2/3 w-full mx-auto py-4 px-8 break-words bg-white dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border z-0"
  >
    <p-loading v-if="loading" />
    <div v-else>
      <div class="flex flex-wrap -mx-3 text-start">
        <div class="w-full grid sm:justify-between">
          <h1 class="text-3xl font-ligth my-12 text-title sm:col-span-2">
            {{ title }}
            <span class="font-light"> {{ detail }}</span>
          </h1>

          <slot name="header"></slot>
        </div>
      </div>
      <p class="text-slate-500 mt-2 text-sm">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import PLoading from "./Loading.vue";

export default {
  props: {
    title: String,
    detail: String,
    loading: { type: Boolean, default: false },
  },
  components: { PLoading },
};
</script>

<style>
</style>