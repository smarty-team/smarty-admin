<template>
  <button class="mx-2 !outline-none text-2xl" @click="toggleDark()">
    <div class="i-carbon-sun dark:i-carbon-moon"></div>
  </button>
</template>
<script lang="ts" setup>
import { toggleDark, isDark } from '@/composables/dark';
isDark.value = false
</script>