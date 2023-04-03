import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '指南', link: '/guild/', activeMatch: '/guild/' },
  { text: '组件', link: '/components/', activeMatch: '/components/' },
  { text: '资源', link: '/project/', activeMatch: '/project/' }
]
