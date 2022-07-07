<template>
  <button type="button" :class="style">
    <slot></slot>
  </button>
</template>
<script lang="ts">
// import { ref } from "vue";
// import { defineComponent, PropType } from "vue";

// export type ISize = "small" | "medium" | "large";
// export type IColor =
//   | "black"
//   | "gray"
//   | "red"
//   | "yellow"
//   | "green"
//   | "blue"
//   | "indigo"
//   | "purple"
//   | "pink";

// export const props = {
//   // 新增
//   size: {
//     type: String as PropType<ISize>,
//     default: "medium",
//   },

//   color: {
//     type: String as PropType<IColor>,
//     default: "blue",
//   },

//   round: {
//     type: Boolean,
//     default: false,
//   },

//   plain: {
//     type: Boolean,
//     default: false,
//   },

//   icon: {
//     type: String,
//     default: "",
//   },
// } as const;
export default {
  name: "SButton",
  setup(props) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };
    // const style = ref(`
    //     py-${size[props.size].y}
    //     px-${size[props.size].x}
    //     bg-indigo-600
    //     hover:bg-indigo-700
    //     focus:ring-indigo-500
    //     focus:ring-offset-indigo-200
    //     text-white
    //     w-full
    //     transition ease-in duration-200
    //     text-center text-base font-semibold
    //     shadow-md
    //     focus:outline-none
    //     focus:ring-2
    //     focus:ring-offset-2
    //     rounded-lg
    // `)
    // return { style }
  }
};
</script>
