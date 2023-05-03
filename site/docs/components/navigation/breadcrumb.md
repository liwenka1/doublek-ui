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

## 图标分隔符