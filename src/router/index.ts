import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/restaurant/:id',
    name: 'details',
    component: () =>
      import(/* webpackChunkName: "details" */ '@/views/Article.vue')
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
