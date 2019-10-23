import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Coins from '../views/Coins.vue'
import Coin from '../views/Coin.vue'

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
  },
  {
    path: '/coin/:id',
    name: 'coin',
    component: Coin
  }
]

const router = new VueRouter({
  routes
})

export default router
