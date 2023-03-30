<script setup lang="ts">
import { ref, onMounted } from "vue";

const button = ref();

onMounted(() => {
  // button.value?.setProperty("--bg", "black");
});
</script>

<template>
  <k-button ref="button" class="test-button">123</k-button>
</template>

<style scoped>
.test-button {
  --bg: yellow;
}
</style>
