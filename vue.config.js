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
	lintOnSave: false
}
