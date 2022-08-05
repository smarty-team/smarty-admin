import Button from "./Button";
import { App } from "vue";

// 具名导出
export { Button };

// 导出插件
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
