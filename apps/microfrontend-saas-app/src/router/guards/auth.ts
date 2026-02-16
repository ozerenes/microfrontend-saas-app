import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@micro-saas-app/stores/auth';

export function authGuard(
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const publicRoute = to.meta.public === true;
  if (publicRoute || to.name === 'login') return next();
  const auth = useAuthStore();
  if (auth.isAuthenticated) return next();
  next({ name: 'login' });
}
