<!-- template for the modal component -->
<template type="text/x-template" id="modal-template">
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-02 backdrop-filter backdrop-blur-sm bg-opacity-75 transition-all"
  >
    <div class="flex items-center">
      <div
        class="bg-white border-t-8 p-4 rounded-lg shadow-md transition-all duration-300"
        :class="`${color}`"
      >
        <div
          class="flex justify-between cursor-pointer gap-24 p-4"
          @click="$emit('close')"
        >
          <slot name="title"></slot>
          <ph-x
            class="text-gray-02 hover:opacity-70 hover:cursor-pointer hover:scale-110"
            :size="20"
          />
        </div>
        <hr class="bg-primary w-full mt-4" />

        <div class="mt-4">
          <slot name="body"></slot>
        </div>

        <div class="mt-4">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PhX } from "@phosphor-icons/vue";
export default {
  components: { PhX },
  props: { color: String },
};
</script>


