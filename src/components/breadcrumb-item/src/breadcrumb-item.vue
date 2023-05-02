<script lang="ts">
export default { name: 'KBreadcrumbItem' }
</script>

<template>
  <span class="k-breadcrumb-item">
    <a v-if="to" @click="handClick"><slot /></a>
    <span v-else><slot /></span>
  </span>
</template>

<script lang="ts" setup>
import '../styles/index'
import { getCurrentInstance } from 'vue'
import type { Router } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object]
  },
  replace: {
    type: Boolean,
    default: false
  }
})

const instance = getCurrentInstance()
const router = instance?.appContext.config.globalProperties.$router as Router

const handClick = () => {
  if (!props.to || !router) return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>
