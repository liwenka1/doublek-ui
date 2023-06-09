import type { ExtractPropTypes, PropType } from 'vue'
import type { ButtonNativeType, ButtonSizeType, ButtonType } from './interface'

export const Props = {
  type: {
    type: String as PropType<ButtonType>,
    default: (): ButtonType => 'default',
    validator(value: ButtonType) {
      return (
        ['default', 'primary', 'success', 'info', 'danger', 'warning'] as const
      ).includes(value)
    }
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    validator(value: ButtonSizeType) {
      return (['large', 'default', 'small', 'mini'] as const).includes(value)
    }
  },
  plain: {
    type: Boolean,
    default: (): Boolean => false
  },
  round: {
    type: Boolean,
    default: (): Boolean => false
  },
  circle: {
    type: Boolean,
    default: (): Boolean => false
  },
  loading: {
    type: Boolean,
    default: (): Boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): Boolean => false
  },
  link: {
    type: Boolean,
    default: (): Boolean => false
  },
  icon: {
    type: String,
    default: (): String => ''
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => 'button',
    validator(value: any) {
      return (['button', 'submit', 'reset'] as const).includes(value)
    }
  }
}

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
}

export type ButtonProps = ExtractPropTypes<typeof Props>
