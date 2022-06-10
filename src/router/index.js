import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:id',
    name: 'destinationDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "destinationDetails" */ '../views/DestinationDetails.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'link-active',
  routes
})

export default router
