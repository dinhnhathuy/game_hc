import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/user/Register.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/user/SignIn.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/user/DashBoard.vue')
    }
  ]
})

export default router
