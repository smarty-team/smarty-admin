<template>
  <button type="button" :class="style">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
import { PropType } from "vue";

export type ISize = "small" | "medium" | "large";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  // 新增
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },

  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },

  round: {
    type: Boolean,
    default: false,
  },

  plain: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: String,
    default: "",
  },
} as const;
export default {
  name: "SButton",
  props,
  setup(props) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };
    console.log('plain', props.plain)
    const style = ref(`
        py-${size[props.size].y}
        px-${size[props.size].x}
        ${props.round ? "rounded-full" : "rounded-lg"}
        bg-${props.color}-${props.plain ? "100" : "500"}
        hover:bg-${props.color}-400
  
        shadow-${size[props.size].text}
        shadow-${props.color}-500/50

        cursor-pointer
        border-2
        border-${props.color}-400
        text-${props.plain ? props.color + "-500" : "white"}
        text-${size[props.size].text}
        hover:text-white
        transition duration-300 ease-in-out transform hover:scale-105
        mx-1
    `)
    return { style }


  }
};
</script>
