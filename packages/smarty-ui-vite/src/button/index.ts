import { defineComponent, h } from "vue";
import JSXButton from '../JSXButton'
export default defineComponent({
  name: "MyButton",
  template:'<button>MyButton</button>',
  // render() {
  //   return h("button", null, "MyButton");
  // },

  // template: `<button>TButton</button>`
});
