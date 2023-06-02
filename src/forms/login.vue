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

        <div class="mt-4 flex justify-evenly">
          <facebook-login
            :appId="FACEBOOK_ID"
            class="rounded-full p-1 cursor-pointer hover:scale-150 duration-700 h-8 w-8 bg-facebook flex justify-center items-center"
          >
            <ph-facebook-logo :size="60" class="text-white" />
          </facebook-login>
          <div
            class="rounded-full p-1 cursor-pointer hover:scale-150 duration-700 h-8 w-8 bg-google flex justify-center items-center"
            @click="() => auth_google()"
          >
            <ph-google-chrome-logo :size="60" class="text-white" />
          </div>
          <div
            class="rounded-full p-1 cursor-pointer hover:scale-150 duration-700 h-8 w-8 bg-microsoft flex justify-center items-center"
            @click="() => auth_outlook()"
          >
            <ph-microsoft-outlook-logo :size="60" class="text-white" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import PButton from "@/components/Button.vue";
import {
  PhFacebookLogo,
  PhGoogleChromeLogo,
  PhMicrosoftOutlookLogo,
} from "@phosphor-icons/vue";

import * as msal from "msal";
// import { GoogleAuth } from "google-auth-library";
// import FacebookLogin from "vue-facebook-login-component";

import { toast } from "vue3-toastify";

export default {
  components: {
    PButton,
    PhFacebookLogo,
    PhGoogleChromeLogo,
    PhMicrosoftOutlookLogo,
  },
  data() {
    return {
      FACEBOOK_ID: "",
    };
  },
  methods: {
    submit(e: any) {
      e.preventDefault();
    },
    auth_outlook() {
      const config = {
        auth: {
          clientId: "SEU_CLIENT_ID",
          redirectUri: "http://localhost:8080", // Coloque a URL correta para redirecionamento
        },
      };

      const client = new msal.PublicClientApplication(config);
      client
        .loginPopup()
        .then((response: any) => {
          console.log(response);
          // Lidar com a resposta do login
        })
        .catch((error: any) => {
          console.log(error);
          toast.error($t("error_login_outlook"));
        });
    },
    async auth_google() {
      // const auth = new GoogleAuth();
      // const client: any = await auth.getClient();
      // const url = client.generateAuthUrl({
      //   access_type: "online",
      // });
      // window.open(url, "_blank");
    },
    async auth_facebook() {
      // const auth = new GoogleAuth();
      // const client: any = await auth.getClient();
      // const url = client.generateAuthUrl({
      //   access_type: "online",
      // });
      // window.open(url, "_blank");
    },
  },
};
</script>

<style>
</style>