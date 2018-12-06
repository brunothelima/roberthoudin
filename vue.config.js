const path = require('path')
module.exports = {
	baseUrl: '/roberthoudin/',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/scss/_vars.scss";'
      }
    }
  },
}
