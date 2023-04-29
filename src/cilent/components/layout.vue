<template>
  <k-row :gutter="20">
    <k-col :span="6">
      <div
        style="background-color: #9090c0; height: 35px; border-radius: 8px"
      ></div
    ></k-col>
    <k-col :span="6">
      <div
        style="background-color: #9090c0; height: 35px; border-radius: 8px"
      ></div
    ></k-col>
    <k-col :span="6">
      <div
        style="background-color: #9090c0; height: 35px; border-radius: 8px"
      ></div
    ></k-col>
    <k-col :span="6">
      <div
        style="background-color: #9090c0; height: 35px; border-radius: 8px"
      ></div
    ></k-col>
  </k-row>
</template>

<script lang="ts" setup>
import { KCol, KRow } from '@/index'
console.log(KCol, KRow)
</script>

<style scoped></style>
