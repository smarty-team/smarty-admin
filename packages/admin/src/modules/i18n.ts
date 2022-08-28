import { createI18n } from "vue-i18n";

// import en from "~/locales/en.json";
// import zh_CN from "~/locales/zh-CN.json";

import { UserModule } from "./types";
import messages from '@intlify/vite-plugin-vue-i18n/messages'
export const install: UserModule = ({ app }) => {

  const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages
  });

  app.use(i18n);
};
