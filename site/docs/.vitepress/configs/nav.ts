import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '指南',
    link: '/guild/foundation/introduction',
    activeMatch: '/guild/foundation/introduction'
  },
  {
    text: '组件',
    link: '/components/basic/button',
    activeMatch: '/components/basic/button'
  },
  {
    text: '资源',
    link: 'https://github.com/liwenka1/doublek-ui',
    activeMatch: '/project/'
  }
]
