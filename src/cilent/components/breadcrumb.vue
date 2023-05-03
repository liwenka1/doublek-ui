<template>
  <k-breadcrumb separator="/">
    <k-breadcrumb-item :to="{ path: '/' }">homepage</k-breadcrumb-item>
    <k-breadcrumb-item><a href="/">promotion management</a></k-breadcrumb-item>
    <k-breadcrumb-item>promotion list</k-breadcrumb-item>
    <k-breadcrumb-item>promotion detail</k-breadcrumb-item>
  </k-breadcrumb>
  <br />
  <k-breadcrumb separator-icon="honor">
    <k-breadcrumb-item :to="{ path: '/' }">homepage</k-breadcrumb-item>
    <k-breadcrumb-item>promotion management</k-breadcrumb-item>
    <k-breadcrumb-item to="/">promotion list</k-breadcrumb-item>
    <k-breadcrumb-item>promotion list</k-breadcrumb-item>
  </k-breadcrumb>
  <br />
  <k-breadcrumb separator-icon="honor">
    <k-breadcrumb-item  :to="{ path: '/' }" replace>homepage</k-breadcrumb-item>
    <k-breadcrumb-item>promotion management</k-breadcrumb-item>
  </k-breadcrumb>
</template>

<script lang="ts" setup></script>

<style scoped></style>
