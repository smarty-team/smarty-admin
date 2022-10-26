import { App } from "vue";
import { Button } from "./Button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import { Link } from "./Link";
import "uno.css";

// 导出单独组件
export { Button, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(Button.name, Button);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(Link.name, Link);
  },
};
