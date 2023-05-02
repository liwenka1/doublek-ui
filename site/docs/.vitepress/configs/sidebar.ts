import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/guild/': [
    {
      text: '基础',
      items: [
        {
          text: 'DoubleK UI',
          link: '/guild/foundation/introduction'
        },
        {
          text: '安装',
          link: '/guild/foundation/installation'
        }
      ]
    },
    {
      text: '进阶',
      items: [
        {
          text: '快速开始',
          link: '/guild/advanced/startUse'
        }
      ]
    }
  ],
  '/components/': [
    {
      text: 'Basic 基础组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/components/basic/button'
        },
        {
          text: 'Icon 图标',
          link: '/components/basic/icon'
        },
        {
          text: 'Layout 布局',
          link: '/components/basic/layout'
        }
      ]
    },
    {
      text: 'Navigation 导航',
      items: [
        {
          text: 'Breadcrumb 面包屑',
          link: '/components/navigation/breadcrumb'
        }
      ]
    }
  ]
}
