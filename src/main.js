// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import common from './components/Common'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = common.serviceURL
Vue.prototype.$ajax = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
