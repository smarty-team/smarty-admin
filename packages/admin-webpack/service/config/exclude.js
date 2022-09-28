module.exports = (base) => {
  base.module.rules.map((v) => {
    v.exclude = /node_modules/;
  });
  return base;
};
