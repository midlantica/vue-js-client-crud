module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:8081',
        secure: false,
        changeOrigin: true,
        ws: true,
        onProxyReq: function (request) {
          request.setHeader('origin', 'http://localhost:8081')
        }
      }
    }
  }
}
