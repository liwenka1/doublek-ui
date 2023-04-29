<template>
  <k-button ref="button" class="button">click me! </k-button>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { KButton } from 'doublek-ui'

const button = ref()
onMounted(() => {
  // button.value?.setProperty && button.value?.setProperty("--bg", "var(--yellow)")
})
</script>

<style scoped>
/* .button {
  --bg: blue;
} */
</style>
