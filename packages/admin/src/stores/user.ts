import { acceptHMRUpdate, defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const count = ref(0);

  function add(num: number = 1) {
    count.value = count.value + num;
  }

  return {
    add,
    count,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
