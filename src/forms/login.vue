<template>
  <form class="p-8" @submit="submit">
    <div class="bg-logo-01 bg-center bg-contain bg-no-repeat h-20"></div>
    <div class="grid gap-4 mt-8 w-96 mx-auto">
      <field-input
        :label="$t('login_input_label')"
        name="login"
        type="text"
        autocomplete="login"
        id="login"
        v-model="username"
      />
      <field-input
        :label="$t('login_password_label')"
        name="password"
        type="password"
        autocomplete="password"
        id="password"
        v-model="password"
      />

      <!-- <div class="text-sm">
            <a
              href="#"
              class="font-sm font-semibold text-primary hover:text-indigo-500"
              >Esqueceu a senha?</a
            >
          </div> -->

      <p-button :label="$t('login_submit')" type="submit" />

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
  </form>
</template>

<script lang="ts">
import {
  PhFacebookLogo,
  PhGoogleChromeLogo,
  PhMicrosoftOutlookLogo,
} from "@phosphor-icons/vue";
import { useAuth } from "@/store/module_login";

import PButton from "@/components/Button.vue";
import { FieldInput } from "@/components/Filds/index";

// import * as msal from "msal";
// import { GoogleAuth } from "google-auth-library";
// import FacebookLogin from "vue-facebook-login-component";

import { toast } from "vue3-toastify";
import { mapState } from "pinia";

export default {
  components: {
    PButton,
    PhFacebookLogo,
    PhGoogleChromeLogo,
    PhMicrosoftOutlookLogo,
    FieldInput,
  },
  setup() {
    const store = useAuth();

    return {
      store,
    };
  },
  data() {
    return {
      FACEBOOK_ID: "",
      username: "root.localhost",
      password: "123456",
    };
  },
  computed: {
    ...mapState(useAuth, ["isLoggedIn"]),
  },
  methods: {
    async submit(e: any) {
      e.preventDefault();
      if (!this.username) {
        toast.error(this.$t("enum.not_username"));
        throw new Error(this.$t("enum.not_username"));
      }
      if (!this.password) {
        toast.error(this.$t("enum.not_password"));
        throw new Error(this.$t("enum.not_password"));
      }

      await this.store.login({
        username: this.username,
        password: this.password,
      });

      if (this.isLoggedIn) {
        this.$router.push("/");
      }
    },
    auth_outlook() {
      // const config = {
      //   auth: {
      //     clientId: "SEU_CLIENT_ID",
      //     redirectUri: "http://localhost:8080", // Coloque a URL correta para redirecionamento
      //   },
      // };
      // const client = new msal.PublicClientApplication(config);
      // client
      //   .loginPopup()
      //   .then((response: any) => {
      //     console.log(response);
      //     // Lidar com a resposta do login
      //   })
      //   .catch((error: any) => {
      //     console.log(error);
      //     toast.error($t("error_login_outlook"));
      //   });
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