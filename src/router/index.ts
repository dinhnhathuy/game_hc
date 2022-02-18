import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404.vue'
import defaultLayout from '@/components/layouts/default.vue'
import adminLayout from '@/components/layouts/defaultDashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        breadcrumb: [{ name: 'Home'}],
        layout: defaultLayout
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        breadcrumb: [{ name: 'About'}],
        layout: defaultLayout
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news/index.vue'),
      meta: {
        breadcrumb: [{ name: 'News'}],
        layout: defaultLayout
      }
    },
    {
      path: '/gears',
      name: 'gears',
      component: () => import('../views/gears/index.vue'),
      meta: {
        breadcrumb: [{ name: 'Gears'}],
        layout: defaultLayout
      }
    },
    {
      path: '/deals',
      name: 'deals',
      component: () => import('../views/deals/index.vue'),
      meta: {
        breadcrumb: [{ name: 'Deals'}],
        layout: defaultLayout
      }
    },
    {
      path: '/previews',
      name: 'previews',
      component: () => import('../views/previews/index.vue'),
      meta: {
        breadcrumb: [{ name: 'Previews'}],
        layout: defaultLayout
      },
      children: [
        {path: 'games', name: 'previews-games', component: () => import('../views/previews/Games.vue')},
        {path: 'entertainments', name: 'previews-entertaiment', component: () => import('../views/previews/Entertainments.vue')},
      ]
    },
    { 
      path: '/previews/:id',
      name: 'preview-content',
      component: () => import('../views/previews/Content.vue'), 
      props: true,
      meta: {
        breadcrumb: [{ name: 'Previews'}],
        layout: defaultLayout
      },
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/games/index.vue'),
      meta: {
        breadcrumb: [{ name: 'Games'}],
        layout: defaultLayout
      }  
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/videos/index.vue') ,
      meta: {
        breadcrumb: [{ name: 'Videos'}],
        layout: defaultLayout
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
        layout: adminLayout
      }
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/user/SignIn.vue'),
      meta: {
        layout: adminLayout
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/user/index.vue'),
      meta: {
        layout: adminLayout
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
