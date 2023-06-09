<template>
  <form class="p-8" @submit="submit">
    <div class="bg-logo-01 bg-center bg-contain bg-no-repeat h-20"></div>
    <div class="grid gap-4 mt-8 sm:w-96 w-[95%] mx-auto">
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

      <p-button :label="$t('login_submit')" type="submit" />
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
    const auth = useAuth();

    return {
      auth,
    };
  },
  data() {
    return {
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

      await this.auth.login({
        username: this.username,
        password: this.password,
      });

      if (this.isLoggedIn) {
        this.$router.push("/");
      }
    },
    authorize() {
      this.auth.authorize();
    },
  },
};
</script>

<style>
</style>