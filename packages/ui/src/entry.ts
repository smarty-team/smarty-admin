import MyButton from "./Mybutton";

// 添加插件
MyButton['install'] = (app) => app.component("MyButton", MyButton);

// 组件库
const SmartyUI = {
  MyButton,
  install: (app) => {
    app.use(MyButton);
  },
};

export default SmartyUI;
