<template>
  <k-button ref="button" class="button">click me! </k-button>
  <k-form></k-form>
</template>

<script lang="ts" setup>
import "@/style/index.css";
import { onMounted, ref } from "vue";
// import { KButton, KForm } from "@/index";

const button = ref<AtypicalDButton>();
onMounted(() => {
  // button.value?.setProperty && button.value?.setProperty("--bg", "var(--yellow)")
});
</script>

<style scoped></style>
