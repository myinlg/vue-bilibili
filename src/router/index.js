import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
Vue.use(Router)
const router = new Router({
    routes: routers
})
router.beforeResolve((to, from, next) => {
    let userName = util.getCookie('username')
    if (!userName && to.path !== '/login') {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        })
    }
    next()
})
export default router