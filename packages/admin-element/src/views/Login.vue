<template>
  <div class="login">
    <!--登录框-->
    <div class="login-container">
      <!--登录框头部-->
      <div class="head">
        <el-icon :size="64">
          <i-ep-element-plus></i-ep-element-plus>
        </el-icon>
        <div class="name">
          <div class="title">AdminElement</div>
          <div class="tips">Vue3后台管理系统</div>
        </div>
      </div>

      <!-- 登录框表单部分 -->
      <el-form
        label-position="top"
        :rules="rules"
        :model="model"
        ref="loginForm"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model.trim="model.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model.trim="model.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
          <el-button style="width: 100%" type="primary" @click="submitForm"
            >立即登录</el-button
          >
          <el-checkbox v-model="checked" @change="!checked"
            >下次自动登录</el-checkbox
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<script setup>
import axios from "@/utils/axios";
import md5 from "js-md5";

// el-form 组件引用
const loginForm = ref(null);

// 表单数据项
const model = reactive({
  username: "", // 账号
  password: "", // 密码
});

// 是否勾选
const checked = ref(true);

// 表单验证规则
const rules = reactive({
  username: [{ required: "true", message: "账户不能为空", trigger: "blur" }],
  password: [{ required: "true", message: "密码不能为空", trigger: "blur" }],
});

// 表单提交方法
const submitForm = async () => {
  const valid = await loginForm.value.validate();
  // 表单是否通过了校验。
  if (valid) {
    // 请求登录接口
    const res = await axios.post("/adminUser/login", {
      userName: model.username || "",
      passwordMd5: md5(model.password), // 密码需要 md5 加密
    });
    // 返回一个令牌，后续请求接口时要带上
    // 这里我们将其存储到 localStorage 备用
    localStorage.setItem("token", res);
    // 此处登录完成之后，需要刷新页面
    window.location.href = "/";
  } else {
    console.error("校验失败，请重试！");
    return false;
  }
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
}
.login-container {
  width: 420px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
  color: #3f9eff;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 28px;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  color: #999;
}

.login-form {
  width: 70%;
  margin: 0 auto;
}
:deep(.el-form--default.el-form--label-top .el-form-item .el-form-item__label) {
  padding: 0;
  margin-bottom: 0;
}
:deep(.el-form-item) {
  margin-bottom: 15px;
}
</style>
