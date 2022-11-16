# Icon 图标 (已弃用)

图标组件依赖于阿里图标库，如有更新前往阿里图标下载源文件更新。

## 代码演示

### 基础用法

:::demo

```vue
<template>
  <div>
    <AliIcon class="icon-calendar"   />
  </div>
</template>
```

:::

### 通用图标

:::demo

```vue
<template>
<div class="flex">
  <div class="col" v-for="(item, index) in iconData" :key="index">
      <AliIcon size="20" :class="item" />
      <div>{{item}}</div>
  </div>
</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'IconDemo',
  setup() {
    const iconData = ref([
      "icon-calendar",
      "icon-delete",
      "icon-close",
      "icon-address",
      "icon-down",
      "icon-display",
      "icon-down",
      "icon-explain",
      "icon-more",
      "icon-Left",
      "icon-news",
      "icon-name",
      "icon-password",
      "icon-hide",
      "icon-Refresh",
      "icon-play",
      "icon-search",
      "icon-suspend",
      "icon-Right",
      "icon-screen",
      "icon-telephone",
      "icon-time",
      "icon-a-Helpcenter",
      "icon-Up",
      "icon-Up1",
      "icon-store"
    ])


    return { iconData }
  }
})
</script>
<style>
.flex {
  display: flex;
  flex-wrap: wrap;
}

.col {
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center
}
</style>

```

:::

## Attributes

| 参数  | 说明                   | 类型          | 可选值 | 默认值 |
| ----- | ---------------------- | ------------- | ------ | ------ |
| class | 样式名字（也是icon名） | string        | —      |
| size  | 尺寸                   | string/number | —      | 16     |
| color | 颜色                   | string        | —      | —      |
