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
      text: 'Form 表单组件',
      items: [
        {
          text: 'Checkbox 多选框',
          link: '/components/form/checkbox'
        },
        {
          text: 'DatePicker 日期选择器',
          link: '/components/form/datePicker'
        },
        {
          text: 'Form 表单',
          link: '/components/form/form'
        },
        {
          text: 'Input 输入框',
          link: '/components/form/input'
        },
        {
          text: 'Slider 滑块',
          link: '/components/form/slider'
        },
        {
          text: 'Switch 开关',
          link: '/components/form/switch'
        },
        {
          text: 'Upload 上传',
          link: '/components/form/upload'
        }
      ]
    },
    {
      text: 'Data 数据展示',
      items: [
        {
          text: 'Avatar 头像',
          link: '/components/data/avatar'
        },
        {
          text: 'Carousel 走马灯',
          link: '/components/data/carousel'
        },
        {
          text: 'Collapse 折叠面板',
          link: '/components/data/collapse'
        },
        {
          text: 'Pagination 分页',
          link: '/components/data/pagination'
        },
        {
          text: 'Progress 进度条',
          link: '/components/data/progress'
        },
        {
          text: 'Table 表格',
          link: '/components/data/table'
        }
      ]
    },
    {
      text: 'Navigation 导航',
      items: [
        {
          text: 'Backtop 回到顶部',
          link: '/components/navigation/backtop'
        },
        {
          text: 'Breadcrumb 面包屑',
          link: '/components/navigation/breadcrumb'
        },
        {
          text: 'Dropdown 下拉菜单',
          link: '/components/navigation/dropdown'
        }
      ]
    },
    {
      text: 'Feedback 反馈组件',
      items: [
        {
          text: 'Alert 提示',
          link: '/components/feedback/alert'
        },
        {
          text: 'Dialog 对话框',
          link: '/components/feedback/dialog'
        },
        {
          text: 'Message 消息提示',
          link: '/components/feedback/message'
        }
      ]
    },
    {
      text: 'Others 其他',
      items: [
        {
          text: 'Divider 分割线',
          link: '/components/others/divider'
        }
      ]
    }
  ]
}
