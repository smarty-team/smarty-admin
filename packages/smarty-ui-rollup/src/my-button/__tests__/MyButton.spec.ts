// TODO: 版本兼容性问题临时注释
import MyButton from "..";
import { mount } from "@vue/test-utils";

describe("Test MyButton", () => {
  test("content", () => {
    const Comp = {
      template: `<div><MyButton>Content</MyButton></div>`,
    };

    const wrapper = mount(Comp, {
      global: {
        components: {
          MyButton,
        },
      },
    });
    expect(wrapper.findComponent({ name: "MyButton" }).text()).toContain(
      "Content"
    );
  });
});
