const proxySettings = {
  '/api/': {
    target: 'http://188.188.90.214:3000',
    changerOrigin: true,
  },
  '/api2/': {
    target: 'http://188.188.90.214:3001',
    changerOrigin: true,
    pathRewrite: {
      '^/api2': '',
    },
  },
}

module.exports = proxySettings
