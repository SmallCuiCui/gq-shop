import BackTop from './BackTop'

// 注册插件，插件的功能不全局的组件更加齐全
BackTop.install = function (Vue, options) {
  Vue.component('BackTop', BackTop)
}

export {
  BackTop
}