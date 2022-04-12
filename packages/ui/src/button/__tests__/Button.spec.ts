import Button from "../../Button";
import { mount } from "@vue/test-utils";

describe("Test Button", () => {
  test("content", () => {
    const Comp = {
      template: `<div><Button></Button></div>`,
    };

    const wrapper = mount(Comp, {
      global: {
        components: {
          Button,
        },
      },
    });
    expect(wrapper.findComponent({ name: "Button" }).text()).toContain(
      "Button"
    );
  });
});
