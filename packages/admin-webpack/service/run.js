const webpack = require("webpack");
const config = require("./build");
const fs = require("fs");
const start = Date.now();
webpack(config, (err, stats) => {
  if (err) throw err;
  console.log(`总耗时: ${(Date.now() - start) / 1000}s`);
});
