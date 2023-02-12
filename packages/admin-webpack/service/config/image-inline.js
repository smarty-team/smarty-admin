module.exports = (base) => {

  let loader = base.module.rules.find(
    (v) => v.test.toString() === "/\\.(png|jpe?g|gif|webp)(\\?.*)?$/"
  );
  Object.assign(loader, {
    parser: {
      dataUrlCondition: {
        maxSize: 30 * 1024 // 4kb
      }
    },
    use: [
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        }
      },
    ]
  },);

  return base;
};
