import type { RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@micro-saas-app/stores/auth';

/**
 * Auth guard: return-based (no next()). Ensures auth is hydrated before checking.
 * Public routes and login pass; otherwise redirect to login if not authenticated.
 */
export function authGuard(to: RouteLocationNormalized): boolean | { name: string } {
  const auth = useAuthStore();
  if (!auth.ready) {
    auth.hydrateFromStorage();
  }
  if (to.meta.public === true || to.name === 'login') return true;
  if (!auth.isAuthenticated) return { name: 'login' };
  return true;
}
