export default {
  development: {
    baseUrl: "/api", // 开发代理地址
  },
  beta: {
    baseUrl: "//backend-api-beta.xxx.com/manage-api/v1", // 测试接口域名
  },
  release: {
    baseUrl: "//backend-api.xxx.com/manage-api/v1", // 正式接口域名
  },
};
