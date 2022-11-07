const path = require("path");
module.exports = (base) => {
  base.module.noParse = /(^vue$)|(^pinia$)|(^vue-router$)/;
  return base;
};
