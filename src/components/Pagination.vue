<template>
  <div class="m7-container">
    <div>
      <p-button
        label=""
        icon="PhCaretCircleLeft"
        class-custom="bg-transparent"
        icon-custom="text-primary"
        :onclick="previousPage"
        :disabled="currentPageLocal === 1"
      />
    </div>
    <span>{{ currentPageLocal }} de {{ totalPages }}</span>
    <div>
      <p-button
        :disabled="currentPageLocal === totalPages"
        label=""
        icon="PhCaretCircleRight"
        class-custom="bg-transparent"
        icon-custom="text-primary"
        :onclick="nextPage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import PButton from "@/components/Button.vue";

export default {
  components: { PButton },
  props: {
    totalPages: { required: true, type: Number },
    pageSize: { required: true, type: Number },
    currentPage: { required: true, type: Number },
    pageChanged: { required: true, type: Function },
  },
  data() {
    return {
      currentPageLocal: this.currentPage || 1,
    };
  },
  methods: {
    previousPage() {
      this.currentPageLocal--;
      this.pageChanged(this.currentPageLocal);
    },
    nextPage() {
      this.currentPageLocal++;
      this.pageChanged(this.currentPageLocal);
    },
  },
};
</script>

<style scoped>
.m7-container {
  display: flex;
  justify-content: center;
  padding: 1rem;

  gap: 1rem;
}
</style>
