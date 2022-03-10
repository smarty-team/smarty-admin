import { createI18n } from "vue-i18n";

import en from "~/locales/en.json";

import { UserModule } from "./types";

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
      en,
    },
  });

  app.use(i18n);
};
