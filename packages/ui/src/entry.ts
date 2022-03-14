import MyButton from "./Mybutton";
import { App } from "vue";
export { MyButton };

export default {
  install(app: App) {
    app.component(MyButton.name, MyButton);
  },
};
