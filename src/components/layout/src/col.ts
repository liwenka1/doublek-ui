import '../styles/index'
import { computed, defineComponent, h, inject } from 'vue'

const KCol = defineComponent({
  name: 'k-col',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    }
  },
  setup(props, { slots }) {
    const { gutter } = inject('k-row', { gutter: { value: 0 } })

    const style = computed(() => {
      if (gutter.value) {
        return {
          paddingLeft: gutter.value / 2 + 'px',
          paddingRight: gutter.value / 2 + 'px'
        }
      }
      return {}
    })
    const classList = computed(() => {
      const ret: string[] = []
      const pos = ['span', 'offset', 'pull', 'push'] as const
      pos.forEach((item) => {
        const size = props[item]
        if (typeof size === 'number' && size > 0) {
          ret.push(
            item !== 'span'
              ? `el-col-${item}-${props[item]}`
              : `el-col-${props[item]}`
          )
        }
      })
      if (gutter.value) {
        ret.push('is-guttered')
      }
      return ret
    })

    return () =>
      h(
        props.tag,
        {
          class: ['k-col', classList.value],
          style: style.value
        },
        slots.default?.()
      )
  }
})

export default KCol
