import { createRouter, createWebHistory } from 'vue-router';
import { MainLayout } from '@micro-saas-app/components';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@micro-saas-app/views/HomeView.vue'),
        },
      ],
    },
  ],
});
