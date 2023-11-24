const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/user1': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
})
