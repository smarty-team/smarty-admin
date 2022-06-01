<template>
  <div class="header">
    <div class="left">
      <span>{{ title }}</span>
    </div>
    <div class="right">right</div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<script setup>
const title = ref("首页");
const route = useRoute();
watch(route, () => {
  title.value = route.meta.title;
});
</script>

<style scoped>
.header {
  height: 50px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
