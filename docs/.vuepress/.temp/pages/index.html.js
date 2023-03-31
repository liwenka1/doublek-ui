export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/logo.png",
    "heroText": "DoubleK UI",
    "tagline": "DoubleK UI，一套为开发者、设计师和产品经理准备的基于 Vue 3 的桌面端组件库",
    "actions": [
      {
        "text": "开始 →",
        "link": "/zh-CN/guide/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "CSS Custom Properties",
        "details": "Unique components can be designed by setting the provided css custom properties."
      },
      {
        "title": "Easy to Use",
        "details": "In addition to import components, you can also just use html `class` to achieve visual effects."
      },
      {
        "title": "More Effects",
        "details": "Some animation and visual solutions are also provided."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2023-present liwenkai."
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1680240467000,
    "contributors": [
      {
        "name": "liwenkai",
        "email": "2020583117@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "index.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
