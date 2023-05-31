<template>
  <div class="bg-gray-01 hidden sm:grid items-center h-screen">
    <div
      class="h-2/4 w-3/4 grid grid-cols-3 rounded-[5rem] border overflow-hidden mx-auto shadow-md"
    >
      <div class="relative bg-gradient-01 flex justify-center items-center">
        <div
          class="bg-img-01 bg-no-repeat bg-cover bg-center opacity-40 flex text-center items-center absolute w-full h-full"
        ></div>

        <div class="grid gap-8 text-white font-semibold text-2xl z-10 p-8">
          <div>
            {{ $t("login_text") }}
          </div>
          <p-button label="Entrar" :onclick="submit" color="primary" />
        </div>
      </div>
      <div class="bg-white grid p-4 items-center col-span-2">
        <form-login />
      </div>
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
  methods: {
    submit() {},
  },
};
</script>

<style>
</style>