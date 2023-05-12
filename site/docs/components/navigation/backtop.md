# Backtop 回到顶部

返回页面顶部的操作按钮。

## 基础用法

通过滑动来查看容器右下角的按钮。

  Scroll down to see the bottom-right button.
  <k-backtop />

  <details>
  <summary>展开查看</summary>

  ```vue
  <k-backtop />
  ```
  </details>

## 自定义位置及图标

显示区域被固定为 40px * 40px 的区域，其中的位置以及图标可支持自定义。

  Scroll down to see the bottom-right button.
  <k-backtop :right="200" :bottom="200" name="error">
  </k-backtop>
  <details>
  <summary>展开查看</summary>

  ```vue
  <k-backtop :right="200" :bottom="200" name="error">
  </k-backtop>
  ```
  </details>

<div style="height:50vh"></div>