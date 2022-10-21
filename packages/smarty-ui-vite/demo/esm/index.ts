import { createApp } from "vue/dist/vue.esm-bundler.js";
import Button from "../../dist/Button/index.esm.js";

createApp({
  template: `
      <SButton color="blue"></SButton>
`,
})
  .component(Button.name, Button)
  .mount("#app");
