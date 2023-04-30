import '../styles/index'
import { computed, defineComponent, h, provide } from 'vue'

export default defineComponent({
  name: 'KRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start'
    }
  },
  setup(props, { slots }) {
    provide('KRow', props.gutter)
    const classList = computed(() => [
      'k-row',
      props.justify !== 'start' ? `is-justify-${props.justify}` : ''
    ])
    const styles = computed(() => {
      const res = {
        marginLeft: '',
        marginRight: ''
      }
      if (props.gutter) {
        res.marginLeft = res.marginRight = `-${props.gutter / 2}px`
      }
      return res
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
