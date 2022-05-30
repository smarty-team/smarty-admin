<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="layout">
    <el-container class="container">
      <el-aside class="aside">
        <!-- logo -->
        <div class="head">
          <div>
            <el-icon color="white" :size="22" class="logo">
              <i-ep-shopping-bag></i-ep-shopping-bag>
            </el-icon>
            <span>Vue3-Admin</span>
          </div>
        </div>
        <el-menu background-color="#222832" text-color="#fff" :router="true">
          <!--一级栏目-->
          <el-submenu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <!--二级栏目-->
            <el-menu-item index="/">
              <el-icon :size="18" class="icon-menu">
                <i-ep-data-board />
              </el-icon>
              首页
            </el-menu-item>
            <el-menu-item index="/add">
              <el-icon :size="18" class="icon-menu">
                <i-ep-document-add></i-ep-document-add>
              </el-icon>
              新增商品
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 内容 -->
      <el-container class="content">
        <!-- 头部 -->
        <Header></Header>
        <!-- 页面内容 -->
        <div class="main">
          <!--将 <router-view></router-view> 移到这里，并且用单标签-->
          <router-view />
        </div>
        <!-- 底部 -->
        <Footer></Footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh;
}
.aside {
  width: 200px !important;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
.logo {
  margin-right: 2px;
}
.icon-menu {
  padding-bottom: 6px;
}
</style>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-menu {
  border-right: none !important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.el-submenu:first-child {
  border-top: none;
}
.el-submenu [class^="el-icon-"] {
  vertical-align: -1px !important;
}
a {
  color: #409eff;
  text-decoration: none;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-popper__arrow {
  display: none;
}
</style>
