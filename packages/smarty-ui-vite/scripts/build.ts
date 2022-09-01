import * as fs from "fs-extra";
import * as path from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;

  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);
  // await build(defineConfig({}))

  const baseOutDir = config.build.outDir;
  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "smarty-ui.umd.js";
  packageJson.module = "smarty-ui.esm.js";
  fs.outputFile(
    path.resolve(baseOutDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  // 拷贝 README.md文件
  fs.copyFileSync(
    path.resolve("./README.md"),
    path.resolve(baseOutDir + "/README.md")
  );

  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      const outDir = path.resolve(baseOutDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`es`, `umd`],
        },
        outDir,
      };

      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "smarty-ui-vite/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
}`,
        `utf-8`
      );
    });
};

buildAll();
