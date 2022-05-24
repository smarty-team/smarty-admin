import MyButtonOrigin from "./MyButtonOrigin";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import { App } from "vue";
export { MyButtonOrigin };

export default {
  install(app: App) {
    app.component(MyButtonOrigin.name, MyButtonOrigin);
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
  },
};
