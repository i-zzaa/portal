<template>
  <form class="p-8" @submit="submit">
    <div class="">
      <div class="bg-logo-01 bg-center bg-contain bg-no-repeat h-20">
        <!-- <div class="bg-gradient-01 h-24 w-full"></div> -->
      </div>
      <div class="grid gap-4 mt-8 w-96 mx-auto">
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Email</label
        >
        <div class="">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>

        <div class="flex items-center justify-between">
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
          <div class="text-sm">
            <a
              href="#"
              class="font-sm font-semibold text-primary hover:text-indigo-500"
              >Esqueceu a senha?</a
            >
          </div>
        </div>
        <div class="">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>

        <p-button
          :label="$t('login_submit')"
          :onclick="submit"
          color="primary"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import PButton from "@/components/Button.vue";

export default {
  components: { PButton },
  methods: {
    submit(e: any) {
      e.preventDefault();
    },
  },
};
</script>

<style>
</style>