# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 代码演示

:::demo

```vue
<template>
  <Pagination />
  <a-divider orientation='left' plain='true' >基本</a-divider>
  <p>基础分页。</p>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const current = ref(2)

</script>

<style lang='less'>

</style>
```

:::