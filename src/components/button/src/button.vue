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
    @click="handlerClick"
  >
    <i v-if="props.loading" class="k-icon-loading"></i>
    <i v-if="props.icon && !props.loading" :class="props.icon"></i>
    <slot />
  </button>
</template>

<script setup lang="ts">
import "../styles/index";
import { computed } from "vue";
import { Props, Emits } from "./button";
const props = defineProps(Props);
const emits = defineEmits(Emits);
const classList = computed(() => {
  const { type, size, round, plain, circle, disabled, loading } = props;
  return [
    {
      [`k-button--${type}`]: type,
      [`k-button--${size}`]: size,
      ["is-disabled"]: disabled,
      ["is-loading"]: loading,
      ["is-round"]: round,
      ["is-plain"]: plain,
      ["is-circle"]: circle,
    },
  ];
});
function handlerClick(evt: MouseEvent): void {
  emits("click", evt);
}
console.log(classList);
</script>

<style scoped></style>
