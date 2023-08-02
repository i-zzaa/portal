<template>
  <d-loading :loading="loading" v-if="loading" />
  <div v-else>
    <div v-if="previewUrl">
      <div class="border border-gray-04 rounded-md px-3 py-2 flex gap-2">
        <ph-file-archive :size="20" />
        {{ fileCurrent?.name }}
        <ph-x
          :size="20"
          class="text-red-01 ml-auto hover:scale-125 cursor-pointer"
          @click="handleRemove"
        />
      </div>
    </div>

    <div
      v-else
      class="w-full border border-dashed rounded-md grid justify-center text-center items-center p-8 gap-2"
      :class="{ 'border-green-01': isDragging, 'border-primary': !isDragging }"
      @dragover.prevent="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
      @dragenter="isDragging = true"
      @dragend="isDragging = false"
    >
      <div
        class="relative flex justify-center items-center gap-2 p-2 bg-primary rounded-full text-white no-wrap text-ellipsis hover:opacity-80 cursor-pointer"
        type="button"
      >
        <ph-cloud-arrow-up :size="16" weight="bold" class="cursor-pointer" />

        <input
          class="absolute left-0 top-0 opacity-0 cursor-pointer h-full w-full"
          type="file"
          id="file-input"
          name="file"
          :accept="accept"
          ref="fileInput"
          @change="uploadSelect"
          :maxlength="maxlength"
        />
        {{ $t("upload")?.toUpperCase() }}
      </div>

      <span>{{ $t("login_or").toLocaleUpperCase() }}</span>

      {{ $t("upload_drop") }}
    </div>
  </div>
</template>

<script lang="ts">
import { PhCloudArrowUp, PhFileArchive, PhX } from "@phosphor-icons/vue";
import { toast } from "vue3-toastify";

export default {
  props: {
    type: {
      type: String,
      default: "button",
      required: true,
    },
    label: String,
    color: String,
    icon: String,
    maxlength: Number,
    accept: { type: String, default: ".jpeg,.png" },
  },

  data() {
    return {
      isDragging: false,
      loading: false,
      previewUrl: "",
      fileCurrent: { name: "" },
    };
  },
  methods: {
    async uploadSelect(event: any) {
      const file = event.target.files[0];

      if (!file) {
        toast.error(this.$t("ENUM.not_img"));
        return;
      }

      this.fileCurrent = file;
      this.previewUrl = URL.createObjectURL(file);
      this.$emit("update:modelValue", file);

      // this.$forceUpdate();
    },

    handleDragOver(event: any) {
      event.preventDefault();

      this.isDragging = true;
    },
    handleDragLeave(event: any) {
      event.preventDefault();

      this.isDragging = false;
    },
    handleDrop(event: any) {
      event.preventDefault();

      const file = event.dataTransfer.files[0];

      if (!file) {
        toast.error(this.$t("ENUM.not_img"));
        return;
      }

      this.isDragging = false;

      this.fileCurrent = file;
      this.previewUrl = URL.createObjectURL(file);
      this.$emit("update:modelValue", file);
    },
    handleRemove() {
      this.fileCurrent = { name: "" };
      this.previewUrl = "";
      this.$emit("update:modelValue", null);
    },
  },
  components: { PhCloudArrowUp, PhFileArchive, PhX },
  emits: ["update:modelValue"],
};
</script>

