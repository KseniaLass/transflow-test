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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Route
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
