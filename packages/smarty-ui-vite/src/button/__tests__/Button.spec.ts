import Button from "../Button";
// import { shallowMount } from "@testing-library/vue";

import { shallowMount } from "@vue/test-utils";
import { expect, test } from "vitest";
test("it should work", () => {
  // const { getByText } = render({
  //   template: `<SButton>Button</SButton>`,
  //   components:{
  //       'SButton' :Button
  //   }
  // });

  // // assert output
  // getByText("Button");

  const wrapper = shallowMount(Button, {
    slots: {
      default: 'Button'
    }
  });
  expect(wrapper.text()).toBe("Button");
});
