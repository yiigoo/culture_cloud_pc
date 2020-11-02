import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routers from './router.js'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@/styles/base.less'

Vue.use(VueRouter)
Vue.use(ViewUI)

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
