import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Route from '@/views/Route.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/route/:id',
    name: 'Route',
    component: Route,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
