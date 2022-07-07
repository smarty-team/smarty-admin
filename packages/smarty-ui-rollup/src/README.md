<br>

<p align="center">
<img src="https://github.com/smarty-team/smarty-admin/blob/main/assets/logo.jpeg" style="width:200px;" />
</p>

<h1 align="center">Smarty-Admin-UI (Rolllup版)</h1>

<p align="center">
五脏俱全的组件库教学模型
</p>

<p align="center">
<a href="https://www.npmjs.com/package/smarty-admin-ui"><img src="https://img.shields.io/npm/v/smarty-admin-ui?color=c95f8b&amp;label=" alt="NPM version"></a></p>


[![CI](https://github.com/smarty-team/smarty-admin/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/smarty-team/smarty-admin/actions/workflows/main.yml)
<br>
<br>

## Features

前端工程化演示项目。
- 基于Vue框架
- 支持JSX与Vue单文件组件
- Jest + Vue3 plugins实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用Rollup构建
- 基于Action CI 实现持续集成与交付

## Install

```bash
npm i smarty-admin-ui
```

## Quick Start

```js
    import Vue from 'vue'
    import SmartyUI from 'element-ui'

    const App = {
        template: `
                <MyButton/>
            `,
    };

    createApp(App)
        .use(SmartyUI)
        .mount("#app");

```

## Browser Support

Modern browsers and Internet Explorer 10+.

## Join Discussion Group

Scan the QR code using [Dingtalk App](https://www.dingtalk.com/) to join in discussion group :

<img alt="Join Discusion Group" src="https://github.com/smarty-team/smarty-admin/blob/main/assets/dingding.jpeg" width="300">


## LICENSE
[MIT](LICENSE)