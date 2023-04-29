import type { ButtonHTMLAttributes } from 'vue'

export type ButtonSizeType = 'large' | 'default' | 'small' | 'mini'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'danger'
  | 'warning'

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>
