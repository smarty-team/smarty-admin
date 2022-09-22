"use strict";

const { merge } = require("webpack-merge");
const base = require("./config/base");
const cache = require("./config/cache");
module.exports = merge(
  base,
  //   cache, // 执行缓存
  {
    mode: "development",
  }
);
