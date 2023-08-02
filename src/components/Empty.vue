<template>
  <div class="flex justify-center my-8 gap-2 text-gray-02 text-base">
    <ph-folder-simple-dashed :size="20" />

    {{ $t("ENUM.empty") }}
  </div>
</template>

<script lang="ts">
import { PhFolderSimpleDashed } from "@phosphor-icons/vue";
export default {
  components: { PhFolderSimpleDashed },
};
</script>