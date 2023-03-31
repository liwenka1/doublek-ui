<template>
  <k-button ref="button" class="button">click me! </k-button>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const button = ref()
onMounted(() => {
  // button.value?.setProperty && button.value?.setProperty("--bg", "var(--yellow)")
})
</script>

<style scoped>
.button {
  --bg: yellow;
}
</style>
