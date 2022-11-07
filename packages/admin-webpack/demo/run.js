const webpack = require("webpack");
const config = require("./webpack.config");
const happy = require("./webpack.happy");
const start = Date.now();
console.log("123");
webpack(config, (err, stats) => {
  if (err) {
    throw err;
    // console.error(err);
  }
  console.log(`总耗时: ${(Date.now() - start) / 1000}s`);
});

// webpack(happy, (err, stats) => {
//   if (err) throw err;
//   console.log(`Happpypack总耗时: ${(Date.now() - start) / 1000}s`);
// });
