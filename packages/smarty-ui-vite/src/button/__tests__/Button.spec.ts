import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { render } from "@testing-library/vue";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("mount  @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.text()).toBe("Button");
  });

  test("mount  @testing-library/vue", () => {
    const { getByText } = render(Button, {
      slots: {
        default: "Button",
      },
    });
    // // assert output
    getByText("Button");
  });

  describe("color", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });

      expect(wrapper.classes().includes("bg-blue-500")).toBe(true);
    });

    test("red", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          color: "red",
        },
      });

      expect(wrapper.classes().includes("bg-red-500")).toBe(true);
    });
  });

  describe("round", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });

      expect(wrapper.classes().includes("rounded-lg")).toBe(true);
    });

    test("round:true", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          round: true,
        },
      });

      expect(wrapper.classes().includes("rounded-full")).toBe(true);
    });
  });

  describe("plain", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });

      expect(wrapper.classes().includes("bg-blue-500")).toBe(true);
    });

    test("plain:true", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          plain: true,
        },
      });

      expect(wrapper.classes().includes("bg-blue-100")).toBe(true);
    });
  });

  test("icon", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        icon: "edit",
      },
    });

    expect(wrapper.find("i").classes().includes("i-ic-baseline-edit")).toBe(
      true
    );
  });
});
