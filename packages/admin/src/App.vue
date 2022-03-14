

<script setup lang="ts">
// import { ref } from "vue";
// import { useI18n } from 'vue-i18n'
import { useUserStore } from "~/stores/user";

const num = ref(100);
const add = () => {
  num.value++;
};

const { t } = useI18n();

const user = useUserStore()
</script>

<template>

  <MyButton />

  <button @click="add">{{ num }}</button>
  <div>Hello SFC ....</div>
  <router-link to="/user">To User</router-link>
  <button
    class="
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-green-500
      hover:bg-green-700
      border-none
      cursor-pointer
    "
  >
    Uno Aviabale
  </button>
  <button>{{ t("hello") }}</button>
  <button @click="user.add()">{{ user.count }}</button>
  <V1 />
  <hr />
  <router-view></router-view>
  <hr />
</template>

