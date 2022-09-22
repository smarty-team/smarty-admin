"use strict";

let base = require("./config/base");
const cache = require("./config/cache");
const happypack = require("./config/happypack");
const threadLoader = require("./config/threadLoader");
const smp = require("./config/speedMeasure");
const terser = require("./config/terser");
let config = base;
config.mode = "production";
// cache(base); // 增加缓存
happypack(base);
threadLoader(base); // 反向优化

terser(base);

// console.log("config", config);

// 速度分析
// config = smp(config);

module.exports = config;
