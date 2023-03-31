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

const buttonRef = ref<HTMLButtonElement>();
const setProperty = (key: string, value: any) => {
  buttonRef.value?.style.setProperty(key, value);
};

defineExpose({
  setProperty: setProperty,
});
</script>

<style scoped>

</style>
