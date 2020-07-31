module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://10.0.0.13:8081',
        secure: false,
        changeOrigin: true
      }
    }
  }
}
