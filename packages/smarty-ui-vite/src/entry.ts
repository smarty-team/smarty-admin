import {App} from 'vue'
import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

export {
    MyButton,
    SFCButton,
    JSXButton
  }
  
  export default {
    install(app: App): void {
        app.component(MyButton.name, MyButton);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
    }
  }