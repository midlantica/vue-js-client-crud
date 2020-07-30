module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:8081',
        secure: false,
        changeOrigin: true
      }
    }
  }
}
