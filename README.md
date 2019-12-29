<h2 align="center" style="color:green">
  wai-ui组件库简要说明
</h2>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <!-- <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg" alt="element-ui">
  </a> -->
  <a href="https://travis-ci.org/waihoyu/wai-ui" rel="nofollow">
    <img src="https://travis-ci.com/waihoyu/wai-ui.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/waihoyu/wai-ui/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/waihoyu/wai-ui/releases">
    <img src="https://img.shields.io/github/release/waihoyu/wai-ui.svg" alt="GitHub release">
  </a>
  <a href="https://gitter.im/wai-ui/discuss">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="gitter">
  </a>
  <a href="https://waihoyu.gitee.io/wai-ui-site/zh/donate">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>
    <a href="https://waihoyu.gitee.io/wai-ui-site/zh/donate">
    <img src="https://img.shields.io/github/followers/waihoyu?style=social" alt="f">
  </a>
  
</p>

<br>

简体中文 | [English](./README.md)

## 简介

[wai-ui](https://waihoyu.github.io/wai-ui) 是一个自己仿写的组件库，它基于 [vue](https://github.com/vuejs/vue) ，参考了 ElementUI 和 [nutui](https://github.com/jdf2e/nutui)实现。它使用了最新的前端技术栈，基本覆盖了 Vue.js 全家桶的所有技术。

-   [在线预览](https://waihoyu.github.io/wai-ui)

-   [Gitter 讨论组](https://gitter.im/wai-ui/discuss)

-   [Gitee](https://waihoyu.gitee.io/wai-ui/) 在线预览（国内用户可访问该地址）

-   [国内访问文档](https://waihoyu.gitee.io/wai-ui-site/zh/) 文档（方便没翻墙的用户查看）

-   基础模板建议使用: [wai-ui](https://github.com/waihoyu/wai-ui)

**该项目不支持低版本浏览器(如 ie)，有需求请自行添加 polyfill [详情](https://github.com/waihoyu/wai-ui/wiki#babel-polyfill)**

**目前版本为基于 `vue-cli` 进行构建，若发现问题，欢迎提[issue](https://github.com/waihoyu/wai-ui/issues/new)。若你想使用旧版本，可以切换分支到[tag/3.11.0](https://github.com/waihoyu/wai-ui/tree/tag/3.11.0)，它不依赖 `vue-cli`**

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

**如有问题请先看上述使用文档和文章，若不能满足，欢迎 issue 和 pr**

## 项目预览

 <p align="center">
 
![image](./src/assets/images/main.png)

![image](./src/assets/images/recommend.png)

![image](./src/assets/images/rearch.png)

</p>

## 功能

```
- 基础组件
  - 头像
  - 按钮
  - 表单

- 业务组件
  - 首页
  - 推荐
  - 搜索
  - 聊天
  - 我的

- 页面组件
  - 首页
  - 推荐
  - 搜索
  - 聊天
  - 我的

- 多环境发布
  - dev sit stage prod

- 全局功能
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

```

## 开发

```bash
# 克隆项目
git clone https://github.com/waihoyu/wai-ui.git

# 进入项目目录
cd wai-ui

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:8080

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

更多信息请参考 [使用文档](https://waihoyu.github.io/wai-ui-site/zh/)

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/waihoyu/wai-ui/releases).

## Online Demo

[在线 Demo](https://waihoyu.github.io/wai-ui)

## Donate

如果你觉得这个项目帮助到了你，你可以帮作者买一杯果汁表示鼓励 :tropical_drink:
![donate](https://waihoyu.github.io/donate/donation.png)

[更多捐赠方式](https://waihoyu.gitee.io/wai-ui-site/zh/donate)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                |

## License

[MIT](https://github.com/waihoyu/wai-ui/blob/master/LICENSE)

Copyright (c) 2019-present WaiHoYu
