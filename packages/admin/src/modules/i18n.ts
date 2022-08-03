import { createI18n } from "vue-i18n";

import en from "~/locales/en.json";
import zh_CN from "~/locales/zh-CN.json";

import { UserModule } from "./types";

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
      en,
      zh_CN
    },
  });

  app.use(i18n);
};
