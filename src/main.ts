import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import "@/assets/css/main.css";

import "vue3-toastify/dist/index.css";

import router from "@/router";
import * as pt from "@/i18n/pt.json";

import App from "./App.vue";

const i18n = createI18n({
  locale: "pt-BR",
  messages: {
    "pt-BR": pt,
  },
});

const app = createApp(App);

const pinia = createPinia();

app.use(pinia).use(router).use(i18n).mount("#app");
