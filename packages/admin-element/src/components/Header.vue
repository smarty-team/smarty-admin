<template>
  <div class="header">
    <div class="left">
      <span>{{ title }}</span>
    </div>
    <div class="right">
      <el-popover
        placement="bottom"
        :width="320"
        trigger="click"
        popper-class="popper-user-box"
      >
        <template #reference>
          <div class="author">
            <i-ep-avatar class="icon"></i-ep-avatar>
            {{ (userInfo && userInfo.loginUserName) || "" }}
            <i-ep-caret-bottom class="icon"></i-ep-caret-bottom>
          </div>
        </template>
        <div class="nickname">
          <p>登录名：{{ (userInfo && userInfo.loginUserName) || "" }}</p>
          <p>昵称：{{ (userInfo && userInfo.nickName) || "" }}</p>
          <el-tag size="small" effect="dark" class="logout" @click="logout"
            >退出</el-tag
          >
        </div>
      </el-popover>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<script setup>
import axios from "@/utils/axios";
import { onBeforeRouteUpdate } from "vue-router";

const title = ref("首页");
const route = useRoute();
watch(
  route,
  () => {
    console.log(route.meta.title);
    title.value = route.meta.title;
  },
  { immediate: true }
);

const router = useRouter();
const userInfo = ref(null);
// 初始化执行方法
onMounted(() => {
  if (!["login"].includes(route.name)) {
    getUserInfo();
  }
});
// 获取用户信息
const getUserInfo = async () => {
  const res = await axios.get("/adminUser/profile");
  userInfo.value = res;
};
// 退出登录
const logout = () => {
  axios.delete("/logout").then(() => {
    // 退出之后，将本地保存的 token  清理掉
    window.localStorage.removeItem("token");
    // 回到登录页
    router.push({ name: "login" });
  });
};
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
.right > div > .icon {
  vertical-align: middle;
}
.author {
  margin-left: 10px;
  cursor: pointer;
}
</style>
<style>
.popper-user-box {
  background: url("https://s.yezgea02.com/lingling-h5/static/account-banner-bg.png")
    50% 50% no-repeat !important;
  background-size: cover !important;
  border-radius: 0 !important;
}
.popper-user-box .nickname {
  position: relative;
  color: #ffffff;
}
.popper-user-box .nickname .logout {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
</style>
