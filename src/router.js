import index from './pages/index.vue'
const routes = [
	{
		path: '/',
		component: index,
		meta: {
			menu: '/'
		}
	},
	{
		path: '/news',
		meta: {
			menu: '/news'
		},
		component: resolve => { require(['./pages/news/list.vue'], resolve)}
	},
	{
		path: '/activity',
		meta: {
			menu: '/activity'
		},
		component: resolve => { require(['./pages/activity/list.vue'], resolve)}
	},
	{
		path: '/user',
		redirect: '/user/account',
		meta: {
			menu: '/user'
		},
		component: resolve => { require(['./pages/user/main.vue'], resolve)},
		children:[
			{
				path:'/user/account',
				meta: {
					menu: '/user',
					subMenu: '/user/account'
				},
				component:resolve => { require(['./pages/user/account.vue'], resolve)}
			},
			{
				path:'/user/activity',
				meta: {
					menu: '/user',
					subMenu: '/user/activity'
				},
				component:resolve => { require(['./pages/user/activity.vue'], resolve)}
			}
		]
	}
]

export default routes
