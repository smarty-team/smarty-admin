"use strict";

let base = require("./config/base");
const cache = require("./config/cache");
const smp = require("./config/speedMeasure");
// const happypack = require("./config/happypack");
// const threadLoader = require("./config/threadloader");

const terser = require("./config/terser");
base.mode = "production";
// cache(base); // 增加缓存

// console.log("config", config);

// happypack(base); 反向优化

// threadLoader(base); // 反向优化
// terser(base);

// 速度分析
base = smp(base);

module.exports = base;
