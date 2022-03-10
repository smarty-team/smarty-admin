import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Layouts from "vite-plugin-vue-layouts";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";
import Unocss from "unocss/vite";
import path from "path";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),

    Pages({
      extensions: ["vue", "md"],
    }),

    Layouts(),

    AutoImport({
      imports: ["vue", "vue-i18n"],
      dts: "src/auto-imports.d.ts",
    }),

    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),

    Unocss(),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "locales/**")],
    }),

  ],
});
