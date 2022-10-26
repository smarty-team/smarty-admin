import { defineComponent } from "vue";
import "uno.css";

export default defineComponent({
  name: "SLink",
  setup(props, { slots }) {
    return () => (
      <a>
        <span> {slots.default ? slots.default() : "默认链接"} </span>
      </a>
    );
  },
});
