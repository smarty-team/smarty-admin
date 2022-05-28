// const s: string = "Hello Typescript";
// console.log(s);

import {createApp} from 'vue'

import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

// createApp(MyButton)
createApp(SFCButton)
// createApp(JSXButton)
.mount("#app");


