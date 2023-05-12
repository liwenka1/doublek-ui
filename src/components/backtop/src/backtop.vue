<script lang="ts">
export default { name: 'KBacktop' }
</script>

<template>
  <div
    v-show="isShow"
    class="k-backtop"
    :style="{
      right: styleRight,
      bottom: styleBottom
    }"
    @click="handleClick"
  >
    <k-icon :name="props.name" class="k-backtop-icon"></k-icon>
  </div>
</template>

<script lang="ts" setup>
import '../styles/index'
import { ref, onMounted, computed } from 'vue'

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
const isShow = ref(false)
onMounted(() => {
  window.addEventListener('scroll', scrollToTop)
  window.addEventListener('beforeunload', () => {
    window.scroll(0, 0)
  })
})
let timer: any = null
const handleClick = () => {
  timer = setInterval(() => {
    let backTopHeight =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    let speed = backTopHeight / 10
    document.documentElement.scrollTop = backTopHeight - speed
    if (Math.abs(backTopHeight) < 1) clearInterval(timer)
  }, 10)
}
const scrollToTop = () => {
  let height =
    document.documentElement.clientHeight || document.body.clientHeight
  let scroll = document.documentElement.scrollTop
  isShow.value = scroll >= height * 0.01
}

const styleBottom = computed(() => `${props.bottom}px`)
const styleRight = computed(() => `${props.right}px`)
</script>

<style lang="scss" scoped></style>
