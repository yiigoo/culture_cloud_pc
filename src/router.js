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
		redirect: '/news/list',
		component: resolve => { require(['./pages/news/index.vue'], resolve)},
		children:[
			{
				path:'/news/list',
				meta: {
					menu: '/news'
				},
				component:resolve => { require(['./pages/news/list.vue'], resolve)}
			},
			{
				path:'/news/detail',
				meta: {
					menu: '/news'
				},
				component:resolve => { require(['./pages/news/detail.vue'], resolve)}
			}
		]
	},
	{
		path: '/activity',
		meta: {
			menu: '/activity'
		},
		component: resolve => { require(['./pages/activity/list.vue'], resolve)}
	},
	{
		path: '/activity-detail',
		meta: {
			menu: '/activity'
		},
		component: resolve => { require(['./pages/activity/detail.vue'], resolve)}
	},
	{
		path: '/venue',
		meta: {
			menu: '/venue'
		},
		component: resolve => { require(['./pages/venue/list.vue'], resolve)}
	},
	{
		path: '/venue-detail',
		meta: {
			menu: '/venue'
		},
		component: resolve => { require(['./pages/venue/detail.vue'], resolve)}
	},
	{
		path: '/heritage',
		meta: {
			menu: '/heritage'
		},
		component: resolve => { require(['./pages/heritage/index.vue'], resolve)}
	},
	{
		path: '/heritage',
		meta: {
			menu: '/heritage'
		},
		component: resolve => { require(['./pages/heritage/index.vue'], resolve)}
	},
	{
		path: '/heritage-directories',
		meta: {
			menu: '/heritage'
		},
		component: resolve => { require(['./pages/heritage/directories.vue'], resolve)}
	},
	{
		path: '/heritage-directories-detail',
		meta: {
			menu: '/heritage'
		},
		component: resolve => { require(['./pages/heritage/directoriesDetail.vue'], resolve)}
	},
	{
		path: '/heritage-exhibition',
		meta: {
			menu: '/heritage'
		},
		component: resolve => { require(['./pages/heritage/exhibition.vue'], resolve)}
	},
	{
		path: '/heritage-exhibition-detail',
		meta: {
			menu: '/heritage'
		},
		component: resolve => { require(['./pages/heritage/exhibitionDetail.vue'], resolve)}
	},
	{
		path: '/brand',
		meta: {
			menu: '/brand'
		},
		component: resolve => { require(['./pages/brand/index.vue'], resolve)},
	},
	{
		path:'/brand/list',
		meta: {
			menu: '/brand',
		},
		component:resolve => { require(['./pages/brand/list.vue'], resolve)}
	},
	{
		path:'/brand/detail',
		meta: {
			menu: '/brand',
		},
		component:resolve => { require(['./pages/brand/detail.vue'], resolve)}
	},

	{
		path: '/culture-service',
		meta: {
			menu: '/culture-service'
		},
		component: resolve => { require(['./pages/cultureService/index.vue'], resolve)}
	},

	{
		path: '/culture-service/list',
		meta: {
			menu: '/culture-service'
		},
		component: resolve => { require(['./pages/cultureService/list.vue'], resolve)}
	},

	{
		path: '/culture-service/detail',
		meta: {
			menu: '/culture-service'
		},
		component: resolve => { require(['./pages/cultureService/detail.vue'], resolve)}
	},

	{
		path: '/culture-service/map',
		meta: {
			menu: '/culture-service'
		},
		component: resolve => { require(['./pages/cultureService/map.vue'], resolve)}
	},


	{
		path: '/culture-team',
		meta: {
			menu: '/culture-team'
		},
		component: resolve => { require(['./pages/cultureTeam/index.vue'], resolve)}
	},
	{
		path: '/culture-team/list',
		meta: {
			menu: '/culture-team'
		},
		component: resolve => { require(['./pages/cultureTeam/teamList.vue'], resolve)}
	},
	{
		path: '/culture-team/list/detail',
		meta: {
			menu: '/culture-team'
		},
		component: resolve => { require(['./pages/cultureTeam/teamDetail.vue'], resolve)}
	},

	{
		path: '/culture-team/art',
		meta: {
			menu: '/culture-team'
		},
		component: resolve => { require(['./pages/cultureTeam/artList.vue'], resolve)}
	},
	{
		path: '/culture-team/art/detail',
		meta: {
			menu: '/culture-team'
		},
		component: resolve => { require(['./pages/cultureTeam/artDetail.vue'], resolve)}
	},
	
	{
		path: '/volunteer',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/index.vue'], resolve)}
	},
	{
		path: '/volunteer/list',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/volunteerList.vue'], resolve)}
	},
	{
		path: '/volunteer/list/detail',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/volunteerDetail.vue'], resolve)}
	},
	{
		path: '/volunteer/star',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/starList.vue'], resolve)}
	},
	{
		path: '/volunteer/star/detail',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/starDetail.vue'], resolve)}
	},

	{
		path: '/volunteer/team',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/teamList.vue'], resolve)}
	},
	{
		path: '/volunteer/team/detail',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/teamDetail.vue'], resolve)}
	},

	{
		path: '/volunteer/mien',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/mienList.vue'], resolve)}
	},
	{
		path: '/volunteer/mien/detail',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/mienDetail.vue'], resolve)}
	},

	{
		path: '/volunteer/training',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/trainingList.vue'], resolve)}
	},
	{
		path: '/volunteer/training/detail',
		meta: {
			menu: '/volunteer'
		},
		component: resolve => { require(['./pages/volunteer/trainingDetail.vue'], resolve)}
	},

	{
		path: '/works',
		meta: {
			menu: '/works'
		},
		component: resolve => { require(['./pages/works/list.vue'], resolve)}
	},
	{
		path: '/works/detail',
		meta: {
			menu: '/works'
		},
		component: resolve => { require(['./pages/works/detail.vue'], resolve)}
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
			},

			{
				path:'/user/activity/detail',
				meta: {
					menu: '/user',
					subMenu: '/user/activity'
				},
				component:resolve => { require(['./pages/user/activityDetail.vue'], resolve)}
			},
			{
				path:'/user/volunteer',
				meta: {
					menu: '/user',
					subMenu: '/user/volunteer'
				},
				component:resolve => { require(['./pages/user/volunteer.vue'], resolve)}
			},

			{
				path:'/user/volunteer/detail',
				meta: {
					menu: '/user',
					subMenu: '/user/volunteer'
				},
				component:resolve => { require(['./pages/user/volunteerDetail.vue'], resolve)}
			},
			{
				path:'/user/venue',
				meta: {
					menu: '/user',
					subMenu: '/user/venue'
				},
				component:resolve => { require(['./pages/user/venue.vue'], resolve)}
			},

			{
				path:'/user/venue/detail',
				meta: {
					menu: '/user',
					subMenu: '/user/venue'
				},
				component:resolve => { require(['./pages/user/venueDetail.vue'], resolve)}
			},
			
			{
				path:'/user/integral',
				meta: {
					menu: '/user',
					subMenu: '/user/integral'
				},
				component:resolve => { require(['./pages/user/integral.vue'], resolve)}
			},
			{
				path:'/user/view',
				meta: {
					menu: '/user',
					subMenu: '/user/view'
				},
				component:resolve => { require(['./pages/user/view.vue'], resolve)}
			},
			{
				path:'/user/message',
				meta: {
					menu: '/user',
					subMenu: '/user/message'
				},
				component:resolve => { require(['./pages/user/message.vue'], resolve)}
			},
			{
				path:'/user/comment',
				meta: {
					menu: '/user',
					subMenu: '/user/comment'
				},
				component:resolve => { require(['./pages/user/comment.vue'], resolve)}
			},
			{
				path:'/user/feedback',
				meta: {
					menu: '/user',
					subMenu: '/user/feedback'
				},
				component:resolve => { require(['./pages/user/feedback.vue'], resolve)}
			},
		]
	},
	{
		path:'/user/shop',
		meta: {
			menu: '/user'
		},
		component:resolve => { require(['./pages/user/shop/list.vue'], resolve)}
	},
	{
		path:'/user/shop/detail',
		meta: {
			menu: '/user'
		},
		component:resolve => { require(['./pages/user/shop/detail.vue'], resolve)}
	},
	{
		path:'/user/survey',
		meta: {
			menu: '/user',
			subMenu: '/user/survey'
		},
		component:resolve => { require(['./pages/user/survey.vue'], resolve)}
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
