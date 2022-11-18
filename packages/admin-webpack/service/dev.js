"use strict";

const base = require("./config/base");

const cache = require("./config/cache");
const lazyCompilation = require("./config/lazyCompilation");
base.mode = "development";
// require("./config/devOptimization")(base);
// cache(base);
// lazyCompilation(base);

// chunk
// require("./config/chunk/split")(base)

// esbuild压缩
// require("./config/quickMinify")(base);


module.exports = base;
