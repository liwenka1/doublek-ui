import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',

  lang: 'zh-CN',
  title: '文凯',
  description: '睡觉工程师',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar: {
      '/blog/': [
        {
          text: '算法',
          items: [
            { text: '多边形三角剖分的最低得分', link: '/blog/algorithm/多边形三角剖分的最低得分' },
            { text: '隐藏个人信息', link: '/blog/algorithm/隐藏个人信息' },
            { text: '有趣的数组打印', link: '/blog/algorithm/有趣的数组打印' },
            { text: '同构字符串和二分查找', link: '/blog/algorithm/同构字符串和二分查找' },
            { text: 'Excel表列', link: '/blog/algorithm/Excel表列' },
            { text: '两个数组条件去重', link: '/blog/algorithm/两个数组条件去重' }
          ],
          collapsed: false
        },
        {
          text: '编程思想',
          items: [{ text: '两个数组条件去重', link: '/blog/programming/面向对象和面向过程' }],
          collapsed: false
        }
      ]
    },

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/liwenka1' }],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2022-present liwenkai'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
