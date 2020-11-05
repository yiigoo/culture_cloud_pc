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
		path: '/venue',
		meta: {
			menu: '/venue'
		},
		component: resolve => { require(['./pages/venue/list.vue'], resolve)}
	},
	{
		path: '/heritage',
		meta: {
			menu: '/heritage'
		},
		component: resolve => { require(['./pages/heritage/list.vue'], resolve)}
	},
	{
		path: '/brand',
		meta: {
			menu: '/brand'
		},
		component: resolve => { require(['./pages/brand/list.vue'], resolve)}
	},
	{
		path: '/culture-service',
		meta: {
			menu: '/culture-service'
		},
		component: resolve => { require(['./pages/cultureService/list.vue'], resolve)}
	},
	{
		path: '/art-team',
		meta: {
			menu: '/art-team'
		},
		component: resolve => { require(['./pages/artTeam/list.vue'], resolve)}
	},
	{
		path: '/volunteer',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/list.vue'], resolve)}
	},
	{
		path: '/login',
		meta: {
			menu: '/login'
		},
		component: resolve => { require(['./pages/user/login.vue'], resolve)}
	},
	{
		path: '/register',
		meta: {
			menu: '/register'
		},
		component: resolve => { require(['./pages/user/register.vue'], resolve)}
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
	},
	
	// 其他页面
	{
		path: '/about',
		component: resolve => { require(['./pages/other/about.vue'], resolve)}
	},
	{
		path: '/links',
		component: resolve => { require(['./pages/other/links.vue'], resolve)}
	},
	{
		path: '/sitemap',
		component: resolve => { require(['./pages/other/sitemap.vue'], resolve)}
	},
	{
		path: '/contact',
		component: resolve => { require(['./pages/other/contact.vue'], resolve)}
	},
	{
		path: '/feedback',
		component: resolve => { require(['./pages/other/feedback.vue'], resolve)}
	},
	{
		path: '/search',
		component: resolve => { require(['./pages/other/search.vue'], resolve)}
	},
]

export default routes
