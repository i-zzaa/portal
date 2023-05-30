import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/assets/css/main.css";
import "@/assets/css/style.css";

import router from "@/router";

import App from "./App.vue";
const app = createApp(App);

const pinia = createPinia();

app.use(pinia).use(router).mount("#app");
