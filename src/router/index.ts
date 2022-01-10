import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(),
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
      path: '/news',
      name: 'news',
      component: () => import('../views/news/index.vue')  
    },
    {
      path: '/gears',
      name: 'gears',
      component: () => import('../views/gears/index.vue')  
    },
    {
      path: '/deals',
      name: 'deals',
      component: () => import('../views/deals/index.vue')  
    },
    {
      path: '/previews',
      name: 'previews',
      component: () => import('../views/previews/index.vue')  
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/games/index.vue')  
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/videos/index.vue')  
    },
    // user
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
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: NotFound
    }
  ]
})

export default router
