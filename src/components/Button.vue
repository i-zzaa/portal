<template>
  <button
    class="flex w-full justify-center items-center rounded-full text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    :class="`${color} ${classCustom} ${disabled && 'cursor-no-drop'}`"
    @click="onclick && onclick"
    :type="type"
    :disabled="disabled"
  >
    <component v-if="!!icon" :is="icon" class="h-4 w-4" :class="iconCustom" />

    <span v-if="!!label">{{ label?.toUpperCase() }}</span>
  </button>
</template>

<script lang="ts">
import {
  PhMagnifyingGlass,
  PhCaretCircleLeft,
  PhCaretCircleRight,
} from "@phosphor-icons/vue";

type ButtonType = "submit" | "reset" | "button";

export default {
  components: {
    PhMagnifyingGlass,
    PhCaretCircleLeft,
    PhCaretCircleRight,
  },
  props: {
    label: String,
    onclick: Function,
    color: { type: String, required: false, default: "bg-primary" },
    icon: String,
    classCustom: { type: String, required: false, default: " px-3 py-1.5" },
    iconCustom: { type: String, required: false, default: "" },
    disabled: { type: Boolean, required: false, default: false },
    type: {
      type: String as () => ButtonType,
      default: "button",
      validator: (value: string) =>
        ["submit", "reset", "button"].includes(value),
    },
  },
};
</script>
