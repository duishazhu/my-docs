# Statistic

展示统计数值。

## 何时使用

+ 当需要突出某个或某组数字时
+ 当需要展示带描述的统计类数据时使用

## 代码演示

:::demo

```vue
<template>
  <div>
    <Statistic :data='statisticData' />
  </div>
</template>

<script setup>
import { toRefs, reactive } from 'vue'

const data = reactive({
  statisticData: [
    {
      basicData: {
        title: '标题1',
        subTitle: '副标题',
        value: '1,2233'
      },
      yesterdayData: {
        title: '昨日',
        value: '2840.5'
      }
    },
    {
      basicData: {
        title: '标题2',
        subTitle: '副标题',
        value: '1,2233'
      },
      yesterdayData: {
        title: '昨日',
        value: '2840.5'
      }
    }
  ]
})

const { statisticData } = toRefs(data)


</script>
```

:::