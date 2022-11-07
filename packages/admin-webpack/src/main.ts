// console.log("Hello Webpack");

import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import {createPinia} from 'pinia'
import { createI18n } from "vue-i18n";

import './style.css';
const i18n = createI18n({
    legacy: false,
    locale: "en",
  });

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(i18n)
app.mount("#app");
