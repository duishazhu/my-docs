const { getPath } = require('./utils')

module.exports = {
  [getPath('/hooks/')]: 'auto',
  [getPath('/components/')]: getComponentsSidebar(),
  [getPath('/guide/')]: getGuideSidebar(),
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      children: [
        {
          text: '前言',
          link: '/components/introduction',
        },
      ],
    },
    {
      text: '全局组件',
      children: [
        {
          text: 'Button',
          link: '/components/glob/button',
        },
      ],
    },
    {
      text: '常用组件',
      children: [
        {
          text: 'Icon',
          link: '/components/icons',
        },
        {
          text: 'Statistic',
          link: '/components/statistic',
        },
        {
          text: 'Basic',
          link: '/components/basic',
        },
        {
          text: 'Page',
          link: '/components/page',
        },
        {
          text: 'Icon',
          link: '/components/icon',
        },
        {
          text: 'Authority',
          link: '/components/auth',
        },
        {
          text: 'Form',
          link: '/components/form',
        },
        {
          text: 'Table',
          link: '/components/table',
        },
        {
          text: 'PopConfirmButton',
          link: '/components/pop-confirm-button',
        },
        {
          text: 'CollapseContainer',
          link: '/components/collapse-container',
        },
        {
          text: 'ScrollContainer',
          link: '/components/scroll-container',
        },
        {
          text: 'LazyContainer',
          link: '/components/lazy-container',
        },
        {
          text: 'CodeEditor',
          link: '/components/code-editor',
        },
        {
          text: 'JsonPreview',
          link: '/components/json-preview',
        },
        {
          text: 'CountDown',
          link: '/components/count-down',
        },

        {
          text: 'ClickOutSide',
          link: '/components/click-out-side',
        },
        {
          text: 'CountTo',
          link: '/components/count-to',
        },
        {
          text: 'Cropper',
          link: '/components/cropper',
        },
        {
          text: 'Description',
          link: '/components/desc',
        },
        {
          text: 'Drawer',
          link: '/components/drawer',
        },
        {
          text: 'Modal',
          link: '/components/modal',
        },
        {
          text: 'FlowChart',
          link: '/components/flow-chart',
        },
        {
          text: 'Upload',
          link: '/components/upload',
        },
        {
          text: 'Tree',
          link: '/components/tree',
        },
        {
          text: 'Excel',
          link: '/components/excel',
        },
        {
          text: 'Qrcode',
          link: '/components/qrcode',
        },
        {
          text: 'Markdown',
          link: '/components/markdown',
        },
        {
          text: 'Loading',
          link: '/components/loading',
        },
        {
          text: 'Tinymce',
          link: '/components/tinymce',
        },
        {
          text: 'Time',
          link: '/components/time',
        },
        {
          text: 'StrengthMeter',
          link: '/components/strength-meter',
        },
        {
          text: 'Verify',
          link: '/components/verify',
        },
        {
          text: 'Transition',
          link: '/components/transition',
        },
        {
          text: 'VirtualScroll',
          link: '/components/virtual-scroll',
        },
      ],
    },
    {
      text: '函数式组件',
      children: [
        {
          text: 'ContextMenu',
          link: '/components/functional/context-menu',
        },
        {
          text: 'Loading',
          link: '/components/functional/loading',
        },
        {
          text: 'Preview',
          link: '/components/functional/preview',
        },
      ],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      children: [
        {
          text: '介绍',
          link: '/guide/introduce',
        },
        {
          text: '开始',
          link: '/guide/',
        },
        {
          text: '项目配置',
          link: '/guide/settings',
        },
        {
          text: '路由',
          link: '/guide/router',
        },
        {
          text: '菜单',
          link: '/guide/menu',
        },
        {
          text: '权限',
          link: '/guide/auth',
        },
        {
          text: 'Mock&联调',
          link: '/guide/mock',
        },
        {
          text: '组件注册',
          link: '/guide/component',
        },
        {
          text: '样式',
          link: '/guide/design',
        },
        {
          text: '外部模块',
          link: '/guide/lib',
        },
        {
          text: '构建&部署',
          link: '/guide/deploy',
        },
        {
          text: 'Electron',
          link: '/guide/electron',
        },
      ],
    }
  ]
}
