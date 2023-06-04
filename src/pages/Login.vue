<template>
  <div class="h-screen w-full grid sm:grid-cols-3 overflow-hidden mx-auto">
    <div
      class="relative bg-gradient-01 sm:flex hidden justify-center items-center"
    >
      <div
        class="bg-img-01 bg-no-repeat bg-cover bg-center opacity-40 flex text-center items-center absolute w-full h-full"
      ></div>

      <div class="grid gap-8 text-white font-semibold text-2xl z-10 p-8">
        <div>
          {{ $t("login_text") }}
        </div>
      </div>
    </div>
    <div class="bg-white grid p-4 items-center col-span-2">
      <form-login />
    </div>

    <!-- <form-login class="grid sm:hidden" /> -->
  </div>
</template>

<script lang="ts">
import FormLogin from "@/forms/login.vue";
import PButton from "@/components/Button.vue";

export default {
  components: { FormLogin, PButton },
  title: "Login",
};
</script>

<style>
</style>