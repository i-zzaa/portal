import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import "vue3-toastify/dist/index.css";

import "@/assets/css/main.css";

import router from "@/router";
import pt from "@/i18n/pt.json";

import App from "./App.vue";

const i18n = new createI18n({
  locale: "pt-BR",
  messages: {
    "pt-BR": pt,
  },
});

const app = createApp(App);

const pinia = createPinia();

app.use(pinia).use(router).use(i18n).mount("#app");
