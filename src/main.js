// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import util from '@/common/util'
import filter from '@/filter/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$util = util;
for (let key in filter) {
  Vue.filter(key, filter[key]);
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
