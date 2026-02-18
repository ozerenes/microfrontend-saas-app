import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from './guards/auth';
import { shellRoutes } from './routes';

/**
 * Single router authority. Layout lives in shell; remotes only contribute views.
 * Remote routes are added via addRemoteRoutes() under 'main-layout'.
 */
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: shellRoutes,
});

router.beforeEach(authGuard);
