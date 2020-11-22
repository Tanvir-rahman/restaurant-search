import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/index.vue')
  },
  {
    path: '/restaurant/:id',
    name: 'details',
    component: () => import(/* webpackChunkName: "Details" */ '@/views/Details/index.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
