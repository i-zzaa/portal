<template>
  <button
    :type="type"
    class="flex w-full justify-center items-center rounded-full text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    :class="`bg-${color} ${classCustom}`"
    @click="onclick && onclick"
  >
    <component v-if="!!icon" :is="icon" class="h-4 w-4" />

    <span v-if="!!label">{{ label?.toUpperCase() }}</span>
  </button>
</template>

<script lang="ts">
import { PhMagnifyingGlass } from "@phosphor-icons/vue";

export default {
  components: {
    PhMagnifyingGlass,
  },
  props: {
    label: String,
    onclick: Function,
    color: String,
    type: String,
    icon: String,
    classCustom: { type: String, required: false, default: " px-3 py-1.5" },
  },
};
</script>

<style>
</style>