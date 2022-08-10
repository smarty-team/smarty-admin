import { acceptHMRUpdate, defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const count = ref(0);

  function add(num: number = 1) {
    count.value = count.value + num;
  }

  // darkMode
  // const darkMode = ref(false);
  // function toggleDarkMode() {
  //   darkMode.value != darkMode.value;
  // }

  const lightBorderStyle = ref("");
  const basicConfig = reactive({
    isFieldFocusRegistered: false,
  });

  const basic = (val: { key: keyof typeof basicConfig; value: any }) => {
    basicConfig[val.key] = val.value
  };
  return {
    add,
    count,
    // darkMode,
    // toggleDarkMode,
    lightBorderStyle,
    ...toRefs(basicConfig),
    basic
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
