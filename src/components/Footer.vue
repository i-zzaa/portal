<template>
  <footer class="fixed bottom-0 w-full bg-primary">
    <ul class="flex justify-between w-full text-white px-4 py-2">
      <li class="flex items-center gap-2 justify-center">
        <span class="leading-4 flex gap-2 items-center text-xs">
          <ph-map-pin :size="10" weight="bold" class="duration-700" />
          {{ $t("footer_location") }}</span
        >
      </li>
      <li class="grid items-center leading-4">
        <span class="text-xs leading-4 flex gap-2 items-center">
          <ph-phone :size="10" weight="bold" class="duration-700" />

          {{ $t("footer_tel") }}
        </span>
      </li>
      <li class="grid items-center leading-4">
        <span class="text-xs leading-4 flex gap-2 items-center">
          <ph-at :size="10" weight="bold" class="duration-700" />
          {{ email }}
        </span>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { PhMapPin, PhPhone, PhAt } from "@phosphor-icons/vue";
import { useHelpDesk } from "@/store/module_helpdesk";
import { computed } from "vue";

export default {
  components: { PhMapPin, PhPhone, PhAt },
  props: {
    label: String,
    onclick: Function,
    color: String,
  },
  setup() {
    const helpDesk = useHelpDesk();
    const email = computed(() => helpDesk.solicitacao.destinatario);

    return {
      email,
    };
  },
};
</script>

<style>
</style>