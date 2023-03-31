import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-fffb8e28","/guide/",{"title":"Index"},["/guide/index.html","/guide/index.md"]],
  ["v-eff8f182","/zh-CN/button/",{"title":"按钮"},["/zh-CN/button/index.html","/zh-CN/button/index.md"]],
  ["v-c0c95384","/zh-CN/",{"title":""},["/zh-CN/index.html","/zh-CN/index.md"]],
  ["v-1d6a5471","/zh-CN/guide/",{"title":"开始"},["/zh-CN/guide/index.html","/zh-CN/guide/index.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
