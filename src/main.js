import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routers from './router.js'
import ViewUI from 'view-design'
import '@/styles/swiper.min.css'
import '@/styles/theme.less'
import '@/styles/base.less'
import '@/styles/icon.less'
import '@/styles/coverViewui.less'
Vue.use(ViewUI)

// 设置全局 webComponents
import webComponents from '@/pages/_components/webComponents'
Vue.use(webComponents)

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// 路由
Vue.use(VueRouter)
const router = new VueRouter({
    routes: Routers
})

// http
import $http from './utils/$http.js'
Vue.prototype.$http = $http

// format date
import dayjs from 'dayjs'
Vue.prototype.$dayjs = dayjs

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start()

    // 路由拦截 登录
    if( /\/user\/*/.test(to.path)){
        sessionStorage.token ? next() : next({path: '/login'})
    }else{
        next()
    }
    
});

router.afterEach(route => {
    ViewUI.LoadingBar.finish()
})


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router: router,
}).$mount('#app')
