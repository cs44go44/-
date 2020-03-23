import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/base.less'
import echarts from 'echarts'
import Vuex from 'vuex'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(Vuex)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
