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
        v-model="form.username"
      />
      <field-input
        :label="$t('login_password_label')"
        name="password"
        type="password"
        autocomplete="password"
        id="password"
        v-model="form.password"
      />

      <p-button :label="$t('login_submit')" type="submit" :loading="loading" />
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
import { computed, onMounted, onUnmounted, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    PButton,
    PhFacebookLogo,
    PhGoogleChromeLogo,
    PhMicrosoftOutlookLogo,
    FieldInput,
  },
  setup(props: any, ctx: any) {
    const auth = useAuth();
    const router = useRouter();
    const form = reactive({
      username: "root@localhost",
      password: "mxfE124nAlm06ocW",
    });

    const loading: any = computed(() => auth.loading);
    const isLoggedIn: any = computed(() => auth.isLoggedIn);

    const submit = async (e: any) => {
      e.preventDefault();
      if (!form.username) {
        toast.error(ctx.$t("ENUM.not_username"));
        throw new Error(ctx.$t("ENUM.not_username"));
      }
      if (!form.password) {
        toast.error(ctx.$t("ENUM.not_password"));
        throw new Error(ctx.$t("ENUM.not_password"));
      }

      await auth.login({
        username: form.username,
        password: form.password,
      });

      if (isLoggedIn.value) {
        router.push("/");
      } else {
        router.push("/login");
      }
    };

    return {
      auth,
      router,
      form,
      submit,
      loading,
    };
  },
};
</script>
