import AliIcon from '../components/Ali/icon.vue'
import Pagination from '../components/Pagination/index.vue'
import StatisticStatisticItem from '../components/Statistic/StatisticItem.vue'
import Statistic from '../components/Statistic/index.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export function registerComponents(app) {
  app.component('AliIcon', AliIcon)
  app.component('Pagination', Pagination)
  app.component('StatisticStatisticItem', StatisticStatisticItem)
  app.component('Statistic', Statistic)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
