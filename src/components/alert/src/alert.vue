<script lang="ts">
export default { name: 'KAlert' }
</script>

<template>
  <transition name="k-alert-fade">
    <div :class="classList" class="k-alert" v-if="isShow">
      <k-icon :name="iconName" class="k-alert_icon" v-if="showIcon"></k-icon>
      <div class="k-alert_content">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <k-icon
          name="close"
          class="k-alert_close-btn"
          v-if="closable"
          @click="handlerClose"
        ></k-icon>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import '../styles/index'
import { AlertType } from './interface'
import { computed, ref } from 'vue'

const isShow = ref(true)
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (val: AlertType) =>
      ['info', 'success', 'error', 'warning'].includes(val)
  },
  title: {
    type: String,
    default: '请绑定title'
  },
  showIcon: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    default: ''
  },
  center: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['close'])
const classList = computed(() => {
  const { type, center } = props
  return [{ [`k-alert--${type}`]: type, ['is-center']: center }]
})

interface IconMaps {
  [key: string]: string
}
const iconMaps: IconMaps = {
  info: 'info',
  success: 'success',
  error: 'error',
  warning: 'warning'
}
const iconName = computed(() => {
  const { type } = props
  return iconMaps[type]
})
const handlerClose = () => {
  isShow.value = false
  emits('close')
}
</script>

<style lang="scss" scoped></style>
