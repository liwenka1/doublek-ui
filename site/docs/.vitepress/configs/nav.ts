import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '指南', link: '/guild/foundation/DoubleK-UI', activeMatch: '/guild/foundation/DoubleK-UI' },
  { text: '组件', link: '/components/', activeMatch: '/components/' },
  { text: '资源', link: '/project/', activeMatch: '/project/' }
]
