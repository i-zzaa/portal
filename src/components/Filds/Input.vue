<template>
  <div class="relative mb-2">
    <label
      v-if="label"
      :for="id"
      class="absolute left-3 top-2 transition-all duration-300 ease-in-out text-gray-500"
      :class="{
        'text-blue-500': isFocused || modelValue,
        'left-3': isFocused || modelValue,
        'top-[-1rem]': isFocused || modelValue,
        'text-xs': isFocused || modelValue,
        classCustom,
      }"
      id="meuLabel"
      >{{ label }}</label
    >

    <input
      :id="id"
      :name="name"
      :type="type"
      :autocomplete="autocomplete"
      :value="modelValue"
      :class="classCustom"
      class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      @input="(event: any)=> $emit('update:modelValue', event.target.value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    oncl: Function,
    type: String,
    name: String,
    id: String,
    classCustom: String,
    autocomplete: String,
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      isFocused: false,
    };
  },
};
</script>