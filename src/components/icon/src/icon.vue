<script lang="ts">
export default { name: 'KIcon' }
</script>

<template>
  <i :class="`k-icon-${props.name}`"></i>
</template>

<script setup lang="ts">
import '../styles/index'
import { Props } from './icon'
const props = defineProps(Props)
</script>

<style scoped></style>
