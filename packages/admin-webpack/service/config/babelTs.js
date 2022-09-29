module.exports = (base) => {
  let loader = base.module.rules.find(
    (v) => v.test.toString() === "/\\.tsx?$/"
  );
  Object.assign(loader, {
    test: /\.tsx?$/,
    // use: [
    //   {
    //     loader: "babel-loader",
    //     options: {
    //       presets: ["@babel/preset-typescript", "@babel/preset-env"],
    //       //   appendTsSuffixTo: ["\\.vue$"],
    //     },
    //   },
    // ],

    use: [
      {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-typescript", "@babel/preset-env"],
        },
      },
    ],
  });

  return base;
};
