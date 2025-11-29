import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import DefaultLayout from '@/layout/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', name: 'home', component: home },
        {
          path: 'about',
          name: 'about',

          component: () => import('../views/about.vue'),
        },
        {
          path: 'projects',
          name: 'projects',

          component: () => import('../views/projects.vue'),
        },
      ],
    },
  ],
})

export default router
