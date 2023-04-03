import { defineConfig } from "vitepress";

import { head, nav, sidebar } from "./configs";

export default defineConfig({
  outDir: "../dist",

  lang: "zh-CN",
  title: "DoubleK-UI",
  description: "睡觉工程师",
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: "/logo.jpg",

    nav,
    sidebar: {},

    /* 右侧大纲配置 */
    outline: {
      level: "deep",
      label: "本页目录",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/liwenka1/doublek-ui" },
    ],

    footer: {
      message: "如有转载或 CV 的请标注本站原文地址",
      copyright: "Copyright © 2022-present liwenkai",
    },

    darkModeSwitchLabel: "外观",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新",

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
});
