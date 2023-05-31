<template>
  <div class="h-screen w-full p-8 mt-12 text-center">
    <h1 class="text-2xl font-medium m-12 text-title">
      {{ $t("home_title") }}
      <span class="font-light"> {{ $t("home_title_detail") }}</span>
    </h1>

    <ul class="flex flex-wrap gap-6 justify-center">
      <li v-for="(item, index) in services" :key="index" class="">
        <Card>
          <template v-slot:title>
            <div class="flex items-center gap-2 text-sm text-start">
              <component :is="item.icon" class="h-6 w-6" />
              {{ item.title }}
            </div>
            <hr class="bg-primary w-full mt-4" />
          </template>
          <div class="mt-8">
            {{ item.description }}
          </div>
        </Card>
      </li>
    </ul>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import { PhKey, PhShareNetwork, PhFloppyDisk } from "@phosphor-icons/vue";
import { RouterView } from "vue-router";

export default {
  components: { Card, PhKey, PhShareNetwork, PhFloppyDisk, RouterView },
  data() {
    return {
      services: [
        {
          icon: "PhKey",
          img: "",
          title: "Contas e Acesso",
          goto: "",
          description:
            "O portal RDS Web permite ao usuário resetar ou desbloquear suas senhas. Clique aqui para acessar o portal.",
        },
        {
          icon: "PhShareNetwork",
          img: "",
          title: "Rede e Conectividade",
          goto: "",
          description:
            "O portal RDS Web permite ao usuário resetar ou desbloquear suas senhas. Clique aqui para acessar o portal.",
        },
        {
          icon: "PhFloppyDisk",
          img: "",
          title: "Backup e Armazenamento",
          goto: "",
          description:
            "O portal RDS Web permite ao usuário resetar ou desbloquear suas senhas. Clique aqui para acessar o portal.",
        },
      ],
    };
  },
};
</script>

<style>
</style>