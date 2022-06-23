// TODO: 版本兼容性问题 临时注释
import SFCButton from "../SFCButton.vue";
import { mount } from "@vue/test-utils";

describe("Test SFCButton", () => {
  test("content", () => {
    const Comp = {
      template: `<div><SFCButton></SFCButton></div>`,
    };

    const wrapper = mount(Comp, {
      global: {
        components: {
          SFCButton,
        },
      },
    });
    expect(wrapper.findComponent({ name: "SFCButton" }).text()).toContain(
      "SFC 666"
    );
  });
});
