import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 访问路径
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../components/HomePage')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../components/Register')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../components/login')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
