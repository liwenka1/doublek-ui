export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/hero.png",
    "actionText": "Get Started →",
    "actionLink": "/guide/",
    "features": [
      {
        "title": "Simplicity First",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      },
      {
        "title": "Vue-Powered",
        "details": "Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue."
      },
      {
        "title": "Performant",
        "details": "VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2023-present liwenkai"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1680194314000,
    "contributors": [
      {
        "name": "liwenkai",
        "email": "2020583117@qq.com",
        "commits": 1
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
