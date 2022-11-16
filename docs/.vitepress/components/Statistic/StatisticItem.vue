<template>
  <div class='statistic-item' :style="[getStyle]">
    <h3 class="statistic-item-title">{{statisticItem.basicData.title}}</h3>
    <p class="statistic-item-subtitle">{{statisticItem.basicData.subTitle}}</p>
    <p class="statistic-item-value">{{statisticItem.basicData.value}}</p>
    <p class="statistic-item-yesterday">
      <span class="statistic-item-yesterday_title">{{statisticItem.yesterdayData.title}}</span>
      <span class="statistic-item-yesterday_value">{{statisticItem.yesterdayData.value}}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { StatisticColumns } from './typing'
import { computed, PropType } from 'vue'

const props = defineProps({
  backgroudColor: {
    type: String,
    default: '#F7F7F7'
  },
  statisticItem: {
    required: true,
    type: Object as PropType<StatisticColumns>
  },
  statisticItemStyle: {
    type: Object,
    default: () => {}
  }
})

const { backgroudColor, statisticItemStyle, statisticItem } = props

const getStyle = computed(() => {
  return {
    ...statisticItemStyle,
    'background': backgroudColor
  }
})


</script>

<style lang="less">
.statistic-item{
  width: 200px;
  padding: 0 20px;
  margin-right: 20px;
  border-radius: 12px;
  &-title{
    padding-top: 24px;
    font-size: 16px;
    color: #000000;
    line-height: 22px;
  }
  &-subtitle{
    font-size: 14px;
    color: #999999;
    line-height: 22px;
    margin-top: 20px;
  }
  &-value{
    font-size: 32px;
    color: #000000;
    font-weight: bold;
    line-height: 37px;
    margin-bottom: 12px;
  }
  &-yesterday{
    &_title{
      color: rgba(0, 0, 0, 0.65);
      line-height: 22px;
    }
    &_value{
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
      padding-left: 5px;
    }
  }
}
</style>
