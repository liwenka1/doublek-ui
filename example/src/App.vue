<template>
  <k-button ref="button" class="button">click me! </k-button>
  <k-alert title="123" type="success"></k-alert>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { KButton, KAlert } from 'doublek-ui'

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
