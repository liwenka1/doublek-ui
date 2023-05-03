# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

在 k-breadcrumb 中使用 k-breadcrumb-item 标签表示从首页开始的每一级。 该组件接受一个 String 类型的参数 separator来作为分隔符。 默认值为 '/'。

  <k-breadcrumb separator="/">
    <k-breadcrumb-item :to="{ path: '/' }">homepage</k-breadcrumb-item>
    <k-breadcrumb-item><a href="/">promotion management</a></k-breadcrumb-item>
    <k-breadcrumb-item>promotion list</k-breadcrumb-item>
    <k-breadcrumb-item>promotion detail</k-breadcrumb-item>
  </k-breadcrumb>

  <details>
  <summary>展开查看</summary>

  ```vue
  <template>
  <k-breadcrumb separator="/">
    <k-breadcrumb-item :to="{ path: '/' }">homepage</k-breadcrumb-item>
    <k-breadcrumb-item><a href="/">promotion management</a></k-breadcrumb-item>
    <k-breadcrumb-item>promotion list</k-breadcrumb-item>
    <k-breadcrumb-item>promotion detail</k-breadcrumb-item>
  </k-breadcrumb>
  </template>
  ```
  </details>

## 图标分隔符

通过设置 separator-icon 可使用相应的 iconfont 作为分隔符，注意这将使 separator 失效。

  <k-breadcrumb separator-icon="honor">
    <k-breadcrumb-item :to="{ path: '/' }">homepage</k-breadcrumb-item>
    <k-breadcrumb-item>promotion management</k-breadcrumb-item>
    <k-breadcrumb-item to="/">promotion list</k-breadcrumb-item>
    <k-breadcrumb-item>promotion list</k-breadcrumb-item>
  </k-breadcrumb>

  <details>
  <summary>展开查看</summary>

  ```vue
  <template>
  <k-breadcrumb separator-icon="honor">
    <k-breadcrumb-item :to="{ path: '/' }">homepage</k-breadcrumb-item>
    <k-breadcrumb-item>promotion management</k-breadcrumb-item>
    <k-breadcrumb-item to="/">promotion list</k-breadcrumb-item>
    <k-breadcrumb-item>promotion list</k-breadcrumb-item>
  </k-breadcrumb>
  </template>
  ```
  </details>

## 路由跳转历史记录

如果设置 replace 属性为 true, 导航将不会留下历史记录。

  <k-breadcrumb separator-icon="honor">
    <k-breadcrumb-item  :to="{ path: '/' }" replace>homepage</k-breadcrumb-item>
    <k-breadcrumb-item>promotion management</k-breadcrumb-item>
  </k-breadcrumb>

  <details>
  <summary>展开查看</summary>

  ```vue
  <template>
  <k-breadcrumb separator-icon="honor">
    <k-breadcrumb-item  :to="{ path: '/' }" replace>homepage</k-breadcrumb-item>
    <k-breadcrumb-item>promotion management</k-breadcrumb-item>
  </k-breadcrumb>
  </template>
  ```
  </details>