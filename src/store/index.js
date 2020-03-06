/**
 * 配置vue-router
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件, 用use
Vue.use(VueRouter) // 调用一个这个方法

// 路由的数组
const routes = [
  {
    // 访问路径
    path: '/#/',
    name: 'home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  routes
})
export default router
