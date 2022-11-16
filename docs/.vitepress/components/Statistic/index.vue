<template>
  <div class="statistic-list">
    <StatisticItem v-for="(item, index) of data" :key="index" :statisticItem="item" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, PropType } from 'vue'
import { StatisticColumns } from './typing'
import StatisticItem from './StatisticItem.vue'

const prpops = defineProps({
  data: {
    type: Array as PropType<StatisticColumns[]>
  }
})

</script>

<style lang="less">
.statistic-list{
  display: flex;
  flex-wrap: wrap;
}
</style>

