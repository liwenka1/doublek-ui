# Alert 提示

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 type 属性指定，默认值为 info。

  <k-alert title="success alert" type="success" />
  <k-alert title="info alert" type="info" />
  <k-alert title="warning alert" type="warning" />
  <k-alert title="error alert" type="error" />
  <details>
  <summary>展开查看</summary>

  ```vue
  <k-alert title="success alert" type="success" />
  <k-alert title="info alert" type="info" />
  <k-alert title="warning alert" type="warning" />
  <k-alert title="error alert" type="error" />
  ```
  </details>

## 自定义关闭按钮

你可以自定义关闭按钮为文字或其他符号。

你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 closable 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 false。当 Alert 组件被关闭时会触发 close 事件。

  <k-alert title="unclosable alert" type="success" :closable="false" />
  <k-alert title="alert with callback" type="warning" closable @close="hklo"/>
  <script lang="ts" setup>
  const hklo = () => {
  alert('Hklo World!')
  }
  </script>
  <details>
  <summary>展开查看</summary>

  ```vue
  <k-alert title="unclosable alert" type="success" :closable="false" />
  <k-alert title="alert with callback" type="warning" closable @close="hklo"/>
  <script lang="ts" setup>
  const hklo = () => {
  alert('Hklo World!')
  }
  </script>
  ```
  </details>

## 使用图标

你可以通过为 Alert 组件添加图标来提高可读性。

通过设置 show-icon 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。

  <k-alert title="success alert" type="success" show-icon />
  <k-alert title="info alert" type="info" show-icon />
  <k-alert title="warning alert" type="warning" show-icon />
  <k-alert title="error alert" type="error" show-icon />
  <details>
  <summary>展开查看</summary>

  ```vue
  <k-alert title="success alert" type="success" show-icon />
  <k-alert title="info alert" type="info" show-icon />
  <k-alert title="warning alert" type="warning" show-icon />
  <k-alert title="error alert" type="error" show-icon />
  ```
  </details>

## 文字居中

使用 center 属性来让文字水平居中。

  <k-alert title="success alert" type="success" center show-icon />
  <k-alert title="info alert" type="info" center show-icon />
  <k-alert title="warning alert" type="warning" center show-icon />
  <k-alert title="error alert" type="error" center show-icon />
  <details>
  <summary>展开查看</summary>

  ```vue
  <k-alert title="success alert" type="success" center show-icon />
  <k-alert title="info alert" type="info" center show-icon />
  <k-alert title="warning alert" type="warning" center show-icon />
  <k-alert title="error alert" type="error" center show-icon />
  ```
  </details>

## 文字描述

为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。

除了必填的 title 属性外，你可以设置 content 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。

  <k-alert
    title="with content"
    type="success"
    content="This is a content."
  />
  <details>
  <summary>展开查看</summary>

  ```js
  <k-alert
    title="with content"
    type="success"
    content="This is a content."
  />
  ```
  </details>

## 带图标和描述

在最后, 这是一个带有图标和描述的例子。

  <k-alert
    title="success alert"
    type="success"
    content="more text content"
    show-icon
  />
  <k-alert
    title="info alert"
    type="info"
    content="more text content"
    show-icon
  />
  <k-alert
    title="warning alert"
    type="warning"
    content="more text content"
    show-icon
  />
  <k-alert
    title="error alert"
    type="error"
    content="more text content"
    show-icon
  />
  <details>
  <summary>展开查看</summary>

  ```js
  <k-alert
    title="success alert"
    type="success"
    content="more text content"
    show-icon
  />
  <k-alert
    title="info alert"
    type="info"
    content="more text content"
    show-icon
  />
  <k-alert
    title="warning alert"
    type="warning"
    content="more text content"
    show-icon
  />
  <k-alert
    title="error alert"
    type="error"
    content="more text content"
    show-icon
  />
  ```
  </details>