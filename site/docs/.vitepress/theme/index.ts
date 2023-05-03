import { h } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import './styles/style.css'
import './styles/var.css'
import 'doublek-ui/dist/style.css'
import { creatUI } from 'doublek-ui'

export default Object.assign({}, Theme, {
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(Theme.Layout, props)
  },
  enhanceApp(ctx: any) {
    Theme.enhanceApp(ctx)
    const { app } = ctx
    // register global components
    app.use(creatUI())
  }
})
