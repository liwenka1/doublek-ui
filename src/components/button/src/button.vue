<script lang="ts">
export default { name: "k-button" };
</script>

<template>
  <button
    class="k-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled || loading"
    :size="size"
  >
    <i v-if="props.loading" class="tas-icon-loading"></i>
    <i v-if="props.icon && !props.loading" :class="props.icon"></i>
    <slot />
  </button>
</template>

<script setup lang="ts">
import "../styles/index";
import { computed } from "vue";
import { Props } from "./button";
const props = defineProps(Props);
const classList = computed(() => {
  const { type, size, round, plain, circle, disabled, loading } = props;
  return [
    {
      [`tas-button--${type}`]: type,
      [`tas-button--${size}`]: size,
      ["is-disabled"]: disabled,
      ["is-loading"]: loading,
      ["is-round"]: round,
      ["is-plain"]: plain,
      ["is-circle"]: circle,
    },
  ];
});
console.log(classList);
</script>

<style scoped></style>
