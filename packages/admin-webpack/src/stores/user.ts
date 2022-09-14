import { acceptHMRUpdate, defineStore } from "pinia";
import {ref} from 'vue'
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
