<script lang="ts">
export default { name: 'KBacktop' }
</script>

<template>
  <div v-show="isShow" class="k-backtop" @click="handleClick">
    <k-icon :name="props.name"></k-icon>
  </div>
</template>

<script lang="ts" setup>
import '../styles/index'
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'up'
  },
  right: {
    type: Number,
    default: 40
  },
  bottom: {
    type: Number,
    default: 40
  }
})
const isShow = ref(true)
const handleClick = () => {}
</script>

<style lang="scss" scoped></style>
