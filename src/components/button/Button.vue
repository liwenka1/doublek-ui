<script lang="ts">
export default { name: "k-button" };
</script>

<template>
  <button class="d-button">
    <slot />
    <span class="d-button_glitch" />
    <span v-if="!!$slots['tag']" class="d-button_tag">
      <slot name="tag"></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import "./Button.css";
</script>
