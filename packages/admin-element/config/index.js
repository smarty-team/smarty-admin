export default {
  development: {
    baseUrl: "/api", // 开发代理地址
  },
  beta: {
    baseUrl: "http://121.36.13.39:28019/manage-api/v1", // 测试接口域名
  },
  release: {
    baseUrl: "http://121.36.13.39:28019/manage-api/v1", // 正式接口域名
  },
  uploadImgURL: "http://121.36.13.39:28019/manage-api/v1/upload/file",
};
