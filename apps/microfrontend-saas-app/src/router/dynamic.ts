import type { RouteRecordRaw } from 'vue-router';
import { router } from './index';

/** Shell layout route name; remote routes are added as children under this parent. */
export const MAIN_LAYOUT_ROUTE_NAME = 'main-layout';

/**
 * Adds remote routes to the shell router. Skips any route whose name is already registered
 * (idempotent). Routes are added as children of main-layout; components are view-only.
 *
 * @param routes - Route definitions from remote (path, name, component = view only)
 * @param parentName - Parent route name (default: main-layout)
 */
export function addRemoteRoutes(
  routes: RouteRecordRaw[],
  parentName: string = MAIN_LAYOUT_ROUTE_NAME
): void {
  for (const route of routes) {
    const name = route.name as string | undefined;
    if (name != null && router.hasRoute(name)) continue;
    router.addRoute(parentName, route);
  }
}
