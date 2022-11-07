import { createApp } from "vue";
import App from "./App.vue";
// import SmartyUI, { Button } from "../../../dist/smarty-ui.esm";
import SmartyUI from "ui-ts";
import '../../../dist/style.css'

const app = createApp(App);
app.use(SmartyUI);
app.mount("#app");






