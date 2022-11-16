<template>
  <a-pagination :style="[getStyle]" :total="total" show-less-items />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    default: 50
  },
  background: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#1890ff'
  },
  backgroundColor: {
    type: String,
    default: '#1890ff'
  }
})

const { total, color, background, backgroundColor } = props


const getStyle = reactive({
  '--color': background? '#fff' : color,
  '--backgroundColor': background? backgroundColor : '#fff',
})


</script>

<style lang="less">
.ant-pagination-item-active{
  background: var(--backgroundColor)!important;
  a {
    color: var(--color)!important;
  }
}
</style>

