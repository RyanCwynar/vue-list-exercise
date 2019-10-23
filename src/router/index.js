import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Coins from '../views/Coins.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/coins',
    name: 'coins',
    component: Coins
  }
]

const router = new VueRouter({
  routes
})

export default router
