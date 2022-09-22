module.exports = (base) => {
  Object.assign(base, {
    cache: {
      type: "filesystem",
      profile: true,
    },
  });

  return base;
};
