<template>
  <k-button ref="button" class="button">click me! </k-button>
</template>

<script lang="ts" setup>
import '@/style/index.css'
import { onMounted, ref } from 'vue';
import { KButton } from '@/index';

const button = ref<AtypicalDButton>()
onMounted(() => {
  // button.value?.setProperty && button.value?.setProperty("--bg", "var(--yellow)")
})
</script>

<style scoped></style>
