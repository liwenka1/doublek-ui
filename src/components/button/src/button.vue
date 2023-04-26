<script lang="ts">
export default { name: "k-button" };
</script>

<template>
  <button
    class="k-button"
    :class="classList"
    :type="nativeType"
    :disabled="disabled"
    :loading="loading"
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
  const { type, size, round, plain, circle, disabled, loading, link } = props;
  return [
    {
      [`k-button--${type}`]: type,
      [`k-button--${size}`]: size,
      ["is-disabled"]: disabled,
      ["is-loading"]: loading,
      ["is-round"]: round,
      ["is-plain"]: plain,
      ["is-circle"]: circle,
      ["is-link"]: link,
    },
  ];
});
function handlerClick(evt: MouseEvent): void {
  emits("click", evt);
}
</script>

<style scoped></style>
