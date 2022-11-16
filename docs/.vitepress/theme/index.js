import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import './styles/index.css'

import '../../../src/assets/iconfont.css'

import Antd, { message, notification } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


import * as Icons from "@ant-design/icons-vue"

const icons = Icons;




export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.

    app.use(Antd)

    for (const i in icons) {
      app.component(i, icons[i]);
    }

    // 全局注册
    app.config.globalProperties.$message = message
    app.config.globalProperties.$notification = notification

    registerComponents(app)
  }
}
