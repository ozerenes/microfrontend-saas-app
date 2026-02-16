import { createRouter, createWebHistory } from 'vue-router';
import { MainLayout } from '@micro-saas-app/components';

/**
 * Tüm sayfa layout'u shell'de tanımlıdır (MainLayout: sidebar, header, content alanı).
 * Remote'lar sadece route'a karşılık gelen view component'ini export eder; layout bilgisi vermez.
 * Remote route'ları addRemoteRoutes() ile 'main-layout' altına child olarak eklenir.
 */
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-layout',
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
