<template>
  <div class="relative mb-2" :class="containerCustom">
    <label
      v-if="label"
      :for="id"
      class="absolute left-3 top-2 transition-all duration-300 ease-in-out text-gray-02"
      :class="{
        'text-blue-500': isFocused || !!modelValue,
        'left-3': isFocused || !!modelValue,
        'top-[-1rem]': isFocused || !!modelValue,
        'text-xs': isFocused || !!modelValue,
        classLabel,
      }"
      id="meuLabel"
      >{{ label }}</label
    >

    <select
      :id="id"
      :name="name"
      :type="type"
      :autocomplete="autocomplete"
      :value="modelValue"
      :class="classCustom"
      @change="handleClange"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :disabled="disabled"
      :required="required"
    >
      <option v-for="option in options" :value="option[index] || option">
        {{ option[labelIndex] }}
      </option>
    </select>
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
    classCustom: {
      type: String,
      required: false,
      default:
        "border border-gray-04 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-03 w-full disabled:cursor-no-drop disabled:text-gray-02 text-text",
    },
    classLabel: String,
    containerCustom: String,
    autocomplete: String,
    required: Boolean,
    modelValue: {
      type: [String, Number],
      required: true,
    },
    options: { type: Array<any>, required: true, default: [] },
    index: { type: String, required: false, default: "value" },
    labelIndex: { type: String, required: false, default: "label" },
    onchange: Function,
    disabled: Boolean,
  },
  data() {
    return {
      isFocused: false,
    };
  },
  methods: {
    handleClange(event: any) {
      this.$emit("update:modelValue", event.target.value);

      this.onchange && this.onchange(event);
    },
  },
};
</script>