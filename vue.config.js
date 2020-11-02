const path = require('path')
module.exports = {
	devServer: {
		proxy: {
			'/*': {
				target: 'http://biubiu.vicp.io:25394/api-biz/',
				ws: true,
				changeOrigin: true
			}
		}
	},

	lintOnSave: false,

	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "less",
			patterns: [
				path.resolve(__dirname, "./src/styles/base.less")
			]
		}
	}
}
