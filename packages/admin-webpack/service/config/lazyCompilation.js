module.exports = (base) => {
  Object.assign(base, {
    experiments: {
      lazyCompilation: true,
    },
  });
  return base;
};
