module.exports = {
  devServer: {
    // 直接写所有代理的源
    // proxy: 'http://apiv2.pingduoduo.com'
    // 分开为每个接口写代理源
    proxy: {
      '/module': {
        // 代理的数据源地址
        target: 'https://list.mogu.com',
        ws: true,
        changeOrigin: true
      },
      '/jsonp': {
        target: 'https://mce.mogucdn.com',
        ws: true,
        changeOrigin: true
      },
      '/search': {
        target: 'https://list.mogu.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
