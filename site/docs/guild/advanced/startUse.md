# 快速开始

接下来将了解组件库在项目中的使用。

## 用法
### 直接引入（推荐）
你可以直接导入组件并使用它。这种情况下，只有导入的组件才会被打包。
```
<template>
  <k-button>doublek-ui</-button>
</template>

<script>
import { defineComponent } from 'vue'
import { KButton } from 'doublek-ui'

   export default defineComponent({
    components: {
      KButton
    }
  })
</script>
```
如果你可以使用 setup script，你可以用下面的方式使用组件。
```
<template>
  <k-button>doublek-ui</-button>
</template>

<script setup>
  import { KButton } from 'doublek-ui'
</script>
```

### 完整引入(不推荐)
```
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import "doublek-ui/dist/style.css";
import { creatUI } from "doublek-ui";

const app = createApp(App);
app.use(creatUI());
app.mount("#app");
```

# 开始使用
现在你可以启动项目了。 具体每个组件的使用方法, 请查阅<a href='/components/'>组件文档</a>