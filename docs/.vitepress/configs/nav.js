const { getPath } = require('./utils')

module.exports = [
  { text: '文档', link: '/guide/introduce' },
  {
    text: '组件',
    link: '/components/introduction',
    activeMatch: getPath('^/components/'),
  },
  { text: 'hooks', link: '/hooks/' },
  {
    text: '更新日志',
    link: 'https://github.com/duishazhu/duishazhu.github.io',
  },
]
