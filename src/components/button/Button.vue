<script lang="ts">
export default { name: "k-button" };
</script>

<template>
  <button ref="buttonRef" class="d-button">
    <slot />
    <span class="d-button_glitch" />
    <span v-if="!!$slots['tag']" class="d-button_tag">
      <slot name="tag"></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { delay } from "lodash-es";
import { onMounted, ref } from "vue";
import "./Button.css";

const buttonRef = ref<HTMLButtonElement>()
const setProperty = (key: string, value: any) => {
  buttonRef.value?.style.setProperty(key, value)
}
onMounted(() => {
  delay(() => {
    setProperty("--bg", "blue")
  }, 3000)
})

defineExpose<AtypicalDButton>({
  setProperty
});
</script>

<style scoped>
.d-button {
  --color: var(--white);
  --border-color: var(--blue);
  --bg: var(--red);
  --glitch-text: "";
  --glitch-color: var(--white);
  --top: rem(16px);
  --left: rem(80px);
}
</style>

