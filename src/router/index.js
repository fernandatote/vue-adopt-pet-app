import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Cats from '../views/CatsView.vue'
import Dogs from '../views/DogsView.vue'
import Pet from '../views/PetView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cats',
    name: 'cats',
    component: Cats
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: Dogs
  },
  {
    path: '/pets/:species/:id',
    name: 'pet',
    component: Pet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
