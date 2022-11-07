import MyButtonOrigin from "./MyButtonOrigin";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import MyButton from "./my-button";
import { App } from "vue";
export { MyButtonOrigin };

export default {
  install(app: App) {
    // app.component(MyButtonOrigin.name, MyButtonOrigin);
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
  },
};
