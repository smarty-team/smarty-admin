import Link from "./Link";
import { App } from "vue";

// 导出Link组件
export { Link };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(Link.name, Link);
  },
};
