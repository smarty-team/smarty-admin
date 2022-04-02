import MyButton from "./Mybutton";
import SFCButton from "./SFCButton.vue"
import JSXButton from './JSXButton'
import { App } from "vue";
export { MyButton };

export default {
  install(app: App) {
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton)
    app.component(SFCButton.name, SFCButton)
  },
};
