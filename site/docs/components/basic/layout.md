<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:20px
  }
  .k-button {
      margin:10px 5px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>
# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。
::: tip
组件默认使用 Flex 布局，不需要手动设置 type="flex"。
请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满
:::
## 基础用法

使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

<div class="example">
  <k-row>
    <k-col :span="24">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </k-col>
  </k-row>
  <br />
  <br />
  <k-row>
    <k-col :span="12">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col :span="12">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
  </k-row>
  <br />
  <br />
  <k-row >
    <k-col  :span="12">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col  :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col  :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
  </k-row>
  <br />
  <br />
  <k-row  :gutter="20" justify="end">
    <k-col  :span="6">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col  :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col  :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
  </k-row>
  <br />
  <br />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <k-row>
    <k-col :span="24">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </k-col>
  </k-row>
  <br />
  <br />
  <k-row>
    <k-col :span="12">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col :span="12">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
  </k-row>
  <br />
  <br />
  <k-row >
    <k-col  :span="12">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col  :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col  :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
  </k-row>
  <br />
  <br />
  <k-row  :gutter="20" justify="end">
    <k-col  :span="6">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col  :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
    <k-col  :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </k-col>
  </k-row>
  <br />
  <br />
</template>
```
</details>

## 分栏间隔

支持列间距。

行提供 gutter 属性来指定列之间的间距，其默认值为0。

<div class="example">
    <k-row  :gutter="40">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <k-row  :gutter="40">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
</template>
```
</details>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="example">
    <k-row  :gutter="40">
      <k-col  :span="16">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="8">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
    <k-row  :gutter="40">
      <k-col  :span="8">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="8">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="4">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="4">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
    <k-row  :gutter="40">
      <k-col  :span="4">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="16">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="4">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <k-row  :gutter="40">
      <k-col  :span="16">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="8">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
    <k-row  :gutter="40">
      <k-col  :span="8">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="8">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="4">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="4">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
    <k-row  :gutter="40">
      <k-col  :span="4">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="16">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="4">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
</template>
```
</details>

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。

<div class="example">
    <k-row>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
    <k-row  justify="center">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
    <k-row justify="end">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
    <k-row justify="space-between">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
    <k-row justify="space-around">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
    <k-row justify="space-evenly">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <br />
    <br />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <k-row>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <k-row justify="center">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <k-row justify="end">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <k-row justify="space-between">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <k-row justify="space-around">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
    <k-row justify="space-evenly">
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </k-col>
      <k-col  :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </k-col>
    </k-row>
</template>
```
</details>