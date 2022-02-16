import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        breadcrumb: [{ name: 'Home'}],
        layout: 'default'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        breadcrumb: [{ name: 'About'}],
        layout: 'default'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news/index.vue'),
      meta: {
        breadcrumb: [{ name: 'News'}],
        layout: 'default'
      }
    },
    {
      path: '/gears',
      name: 'gears',
      component: () => import('../views/gears/index.vue'),
      meta: {
        breadcrumb: [{ name: 'Gears'}],
        layout: 'default'
      }
    },
    {
      path: '/deals',
      name: 'deals',
      component: () => import('../views/deals/index.vue'),
      meta: {
        breadcrumb: [{ name: 'Deals'}],
        layout: 'default'
      }
    },
    {
      path: '/previews',
      name: 'previews',
      component: () => import('../views/previews/index.vue'),
      meta: {
        breadcrumb: [{ name: 'Previews'}],
        layout: 'default'
      }
    },
    {
      path: '/previews/games',
      name: 'previews-games',
      component: () => import('../views/previews/Games.vue'),
    },
    {
      path: '/previews/entertainments',
      name: 'previews-entertaiment',
      component: () => import('../views/previews/Entertainments.vue'),
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/games/index.vue'),
      meta: {
        breadcrumb: [{ name: 'Games'}],
        layout: 'default'
      }  
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/videos/index.vue') ,
      meta: {
        breadcrumb: [{ name: 'Videos'}],
        layout: 'default'
      } 
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('../views/article/content.vue'),
    },
    // user
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/user/Register.vue'),
      meta: {
        layout: 'user'
      }
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/user/SignIn.vue'),
      meta: {
        layout: 'user'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/user/DashBoard.vue'),
      meta: {
        layout: 'user'
      }
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
