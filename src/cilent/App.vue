<template>
  <DoubleKButton ref="button" class="button">click me! </DoubleKButton>
</template>

<script lang="ts" setup>
import '@/style/index.css'
import { onMounted, ref } from 'vue';
import { DoubleKButton } from '@/components/index';

const button = ref<AtypicalDButton>()
onMounted(() => {
  // button.value?.setProperty && button.value?.setProperty("--bg", "var(--yellow)")
})
</script>

<style scoped></style>
