import Button from "./Button";
import { App } from "vue";

// 导出Button
export { Button };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
