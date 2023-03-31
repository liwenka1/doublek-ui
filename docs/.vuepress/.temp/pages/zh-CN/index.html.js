export const data = {
  "key": "v-c0c95384",
  "path": "/zh-CN/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/logo.png",
    "heroText": "Atypical UI",
    "tagline": "希望你可以在这找到一些非专业的组件和效果 :-3",
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
    "footer": "MIT Licensed | Copyright © 2022-present Don."
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1680240467000,
    "contributors": [
      {
        "name": "liwenkai",
        "email": "2020583117@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "zh-CN/index.md"
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
