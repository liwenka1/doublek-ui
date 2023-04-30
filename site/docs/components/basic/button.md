# Button 按钮

常用的操作按钮。

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

  <k-button>default</k-button>
  <k-button type="primary">primary </k-button>
  <k-button type="success">success</k-button>
  <k-button type="info">info</k-button>
  <k-button type="danger">danger </k-button>
  <k-button type="warning">warning</k-button>
  <br />
  <br />
  <k-button plain>default</k-button>
  <k-button plain type="primary">primary </k-button>
  <k-button plain type="success">success</k-button>
  <k-button plain type="info">info</k-button>
  <k-button plain type="danger">danger </k-button>
  <k-button plain type="warning">warning</k-button>
  <br />
  <br />
  <k-button round>default</k-button>
  <k-button round type="primary">primary </k-button>
  <k-button round type="success">success</k-button>
  <k-button round type="info">info</k-button>
  <k-button round type="danger">danger </k-button>
  <k-button round type="warning">warning</k-button>
  <br />
  <br />
  <k-button circle icon="cart-add-fill"></k-button>
  <k-button circle type="primary" icon="cart-add-fill"></k-button>
  <k-button circle type="success" icon="cart-add-fill"></k-button>
  <k-button circle type="info" icon="cart-add-fill"></k-button>
  <k-button circle type="danger" icon="cart-add-fill"></k-button>
  <k-button circle type="warning" icon="cart-add-fill"></k-button>
  <k-button circle size="large" icon="cart-add-fill"> </k-button>
  <k-button circle icon="cart-add-fill"> </k-button>
  <k-button circle size="small" icon="cart-add-fill"> </k-button>
  <br />
  <br />
  <details>
  <summary>展开查看</summary>

  ```vue
  <k-button>default</k-button>
  <k-button type="primary">primary </k-button>
  <k-button type="success">success</k-button>
  <k-button type="info">info</k-button>
  <k-button type="danger">danger </k-button>
  <k-button type="warning">warning</k-button>
  <br />
  <br />
  <k-button plain>default</k-button>
  <k-button plain type="primary">primary </k-button>
  <k-button plain type="success">success</k-button>
  <k-button plain type="info">info</k-button>
  <k-button plain type="danger">danger </k-button>
  <k-button plain type="warning">warning</k-button>
  <br />
  <br />
  <k-button round>default</k-button>
  <k-button round type="primary">primary </k-button>
  <k-button round type="success">success</k-button>
  <k-button round type="info">info</k-button>
  <k-button round type="danger">danger </k-button>
  <k-button round type="warning">warning</k-button>
  <br />
  <br />
  <k-button circle icon="cart-add-fill"></k-button>
  <k-button circle type="primary" icon="cart-add-fill"></k-button>
  <k-button circle type="success" icon="cart-add-fill"></k-button>
  <k-button circle type="info" icon="cart-add-fill"></k-button>
  <k-button circle type="danger" icon="cart-add-fill"></k-button>
  <k-button circle type="warning" icon="cart-add-fill"></k-button>
  <k-button circle size="large" icon="cart-add-fill"> </k-button>
  <k-button circle icon="cart-add-fill"> </k-button>
  <k-button circle size="small" icon="cart-add-fill"> </k-button>
  ```
  </details>

## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

  <k-button disabled>default</k-button>
  <k-button disabled type="primary">primary </k-button>
  <k-button disabled type="success">success</k-button>
  <k-button disabled type="info">info</k-button>
  <k-button disabled type="danger">danger </k-button>
  <k-button disabled type="warning">warning</k-button>
  <br />
  <br />
  <k-button disabled plain>default</k-button>
  <k-button disabled plain type="primary">primary </k-button>
  <k-button disabled plain type="success">success</k-button>
  <k-button disabled plain type="info">info</k-button>
  <k-button disabled plain type="danger">danger </k-button>
  <k-button disabled plain type="warning">warning</k-button>
  <br />
  <br />
  <details>
  <summary>展开查看</summary>

  ```vue
  <k-button disabled>default</k-button>
  <k-button disabled type="primary">primary </k-button>
  <k-button disabled type="success">success</k-button>
  <k-button disabled type="info">info</k-button>
  <k-button disabled type="danger">danger </k-button>
  <k-button disabled type="warning">warning</k-button>
  <br />
  <br />
  <k-button disabled plain>default</k-button>
  <k-button disabled plain type="primary">primary </k-button>
  <k-button disabled plain type="success">success</k-button>
  <k-button disabled plain type="info">info</k-button>
  <k-button disabled plain type="danger">danger </k-button>
  <k-button disabled plain type="warning">warning</k-button>
  ```
  </details>

## 链接按钮

  <k-button link>default</k-button>
  <k-button link type="primary">primary </k-button>
  <k-button link type="success">success</k-button>
  <k-button link type="info">info</k-button>
  <k-button link type="danger">danger </k-button>
  <k-button link type="warning">warning</k-button>
  <br />
  <br />
  <k-button link disabled>default</k-button>
  <k-button link disabled type="primary">primary </k-button>
  <k-button link disabled type="success">success</k-button>
  <k-button link disabled type="info">info</k-button>
  <k-button link disabled type="danger">danger </k-button>
  <k-button link disabled type="warning">warning</k-button>
  <br />
  <br />
  <details>
  <summary>展开查看</summary>

  ```vue
  <k-button link>default</k-button>
  <k-button link type="primary">primary </k-button>
  <k-button link type="success">success</k-button>
  <k-button link type="info">info</k-button>
  <k-button link type="danger">danger </k-button>
  <k-button link type="warning">warning</k-button>
  <br />
  <br />
  <k-button link disabled>default</k-button>
  <k-button link disabled type="primary">primary </k-button>
  <k-button link disabled type="success">success</k-button>
  <k-button link disabled type="info">info</k-button>
  <k-button link disabled type="danger">danger </k-button>
  <k-button link disabled type="warning">warning</k-button>
  ```
  </details>

## 调整尺寸以及加载状态
  <k-button size="large">large </k-button>
  <k-button>default </k-button>
  <k-button size="small">small </k-button>
  <k-button size="large" loading>large </k-button>
  <k-button loading>default </k-button>
  <k-button size="small" loading>small </k-button>
  <br />
  <br />
  <details>
  <summary>展开查看</summary>

  ```vue
  <k-button size="large">large </k-button>
  <k-button>default </k-button>
  <k-button size="small">small </k-button>
  <k-button size="large" loading>large </k-button>
  <k-button loading>default </k-button>
  <k-button size="small" loading>small </k-button>
  ```
  </details>