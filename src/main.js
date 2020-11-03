import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routers from './router.js'
import ViewUI from 'view-design'
import '@/styles/iview.css'
import '@/styles/theme.less'
import '@/styles/base.less'
import '@/styles/icon.less'

import webComponents from '@/components/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.use(VueRouter)
Vue.use(ViewUI)
// 设置全局 webComponents
Vue.use(webComponents)

// http
import $http from './utils/$http.js'
Vue.prototype.$http = $http

// format date
import dayjs from 'dayjs'
Vue.prototype.$dayjs = dayjs

const router = new VueRouter({
    routes: Routers
})

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start()
    next()
});

router.afterEach(route => {
    ViewUI.LoadingBar.finish()
})


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router: router,
}).$mount('#app')
