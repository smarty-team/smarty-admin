<template>
    <button @click="add">{{ num }}</button>
    <div>Hello SFC ....</div>
    <SButton color="red" :round=false>123</SButton>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
const num = ref(0);
const add = () => {
    num.value++;
};
</script>