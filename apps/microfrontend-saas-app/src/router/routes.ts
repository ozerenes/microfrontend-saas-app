import type { RouteRecordRaw } from 'vue-router';
import { MainLayout } from '@micro-saas-app/components';

/**
 * Shell route definitions. Single source of truth for createRouter.
 * Remote routes are injected under main-layout via addRemoteRoutes (dynamic.ts).
 */
export const shellRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    meta: { public: true },
    component: () => import('@micro-saas-app/views/LoginView.vue'),
  },
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
];
