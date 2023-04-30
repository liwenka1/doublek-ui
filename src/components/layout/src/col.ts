import '../styles/index'
import { computed, defineComponent, h, inject } from 'vue'

export default defineComponent({
  name: 'KCol',
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
    }
  },
  setup(props, { slots }) {
    const gutter = inject('KRow') as number

    const classList = computed(() => {
      const res: string[] = []
      const pops = ['span', 'offset'] as const
      pops.forEach((item) => {
        const size = props[item]

        if (typeof size === 'number' && size > 0) {
          res.push(`k-col-${item}-${size}`)
        }
      })

      if (gutter) {
        res.push('is-guttered')
      }

      return ['k-col', ...res]
    })
    const styles = computed(() => {
      if (gutter !== 0) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        }
      }
      return {}
    })
    return () =>
      h(
        props.tag,
        {
          class: classList.value,
          style: styles.value
        },
        slots.default?.()
      )
  }
})
