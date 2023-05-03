<script lang="ts">
import {
  h,
  RendererElement,
  RendererNode,
  VNode,
  VNodeArrayChildren
} from 'vue'
import '../styles/index'

type dymanicItems =
  | VNodeArrayChildren
  | VNode<RendererNode, RendererElement, { [key: string]: any }>

export default {
  name: 'KBreadcrumb',
  props: {
    separator: {
      type: String,
      default: ''
    },
    separatorIcon: {
      type: String,
      default: ''
    }
  },
  render(props: { separator: string; separatorIcon: string }) {
    const items = (this.$slots as any).default()
    const dymanicItems: dymanicItems | (() => any) = []

    items.forEach((item: dymanicItems, index: number) => {
      dymanicItems.push(item)
      if (index < items.length - 1) {
        if (props.separatorIcon) {
          dymanicItems.push(h('i', { class: `k-icon-${props.separatorIcon}` }))
        } else {
          dymanicItems.push(h('i', null, props.separator))
        }
      }
    })

    return h('div', { class: 'k-breadcrumb' }, dymanicItems)
  }
}
</script>
