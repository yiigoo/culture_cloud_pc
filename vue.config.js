const path = require('path')
module.exports = {
	devServer: {
		proxy: {
			'/*': {
				target: 'http://biubiu.vicp.io:25394/',
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
				// path.resolve(__dirname, "./src/styles/theme.less"),
				// path.resolve(__dirname, "./src/styles/base.less"),
				// path.resolve(__dirname, "./src/styles/icon.less"),
				// path.resolve(__dirname, "./src/styles/coverViewui.less")
				
			]
		}
	},
	css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    }
}
