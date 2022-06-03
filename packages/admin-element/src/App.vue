<template>
  <div class="layout">
    <el-container v-if="showMenu" class="container">
      <el-aside class="aside">
        <!-- logo -->
        <div class="head">
          <div>
            <el-icon :size="32" class="logo">
              <i-ep-element-plus></i-ep-element-plus>
            </el-icon>
            <span>SmartyAdmin</span>
          </div>
        </div>
        <el-menu
          background-color="#222832"
          text-color="#fff"
          :router="true"
          :default-openeds="defaultOpen"
          :default-active="currentPath"
        >
          <!--一级栏目-->
          <el-sub-menu index="1">
            <template #title>
              <span>数据看板</span>
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
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper">
                <el-icon :size="18" class="icon-menu">
                  <i-ep-picture /> </el-icon
                >轮播图配置</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
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
    <el-container v-else>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
// 在进入除了/login之外的路由前判断用户是否拥有令牌，没有需要去登录
const router = useRouter();
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    // 如果路径是 /login 则放行
    next();
  } else {
    // 如果不是 /login，判断是否有令牌
    if (!localStorage.getItem("token")) {
      // 如果没有，则跳至登录页面
      next({ path: "/login" });
    } else {
      // 否则继续执行
      next();
    }
  }
});

// 监听路由变化，如果当前页面不需要菜单则隐藏之
const showMenu = ref(false);
const route = useRoute();
const defaultOpen = ref(["1", "2"]);
const currentPath = ref("/");
watch(route, () => {
  if (route.meta.showMenu === false) {
    showMenu.value = false;
  } else {
    showMenu.value = true;
  }

  currentPath.value = route.path;
});
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
  color: #3f9eff;
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
