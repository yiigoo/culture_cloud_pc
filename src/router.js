import index from './pages/index.vue'
const routes = [
	{
		path: '/',
		component: index
	},
	{
		path: '/news',
		name: 'news',
		component: resolve => { require(['./pages/news/list.vue'], resolve)}
	},
	{
		path: '/activity',
		name: 'activity',
		component: resolve => { require(['./pages/activity/list.vue'], resolve)}
	}
]

export default routes
