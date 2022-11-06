import * as fs from "fs-extra";
import * as path from "path";
import { config } from "../vite.config";
import { generateDTS } from './type'
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;

  // 全量打包
  // await build(defineConfig(config as UserConfig) as InlineConfig);
  await build()

  const baseOutDir = config.build.outDir;
  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "smarty-ui.umd.js";
  packageJson.module = "smarty-ui.esm.js";
  packageJson.types = "smarty-ui.d.ts";
  fs.outputFile(
    path.resolve(baseOutDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  // 拷贝 README.md文件
  fs.copyFileSync(
    path.resolve("./README.md"),
    path.resolve(baseOutDir + "/README.md")
  );

  // 生成配置DTS配置文件入口
  generateDTS(path.resolve(config.build.outDir, `smarty-ui.esm.js`),)


  const srcDir = path.resolve(__dirname, "../src/");
  const componentsDir = fs.readdirSync(srcDir).filter((name) => {
    // 只要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });
  // forEach中异步执行有问题 改为for-of
  for (let name of componentsDir) {
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
  }
};

buildAll();
