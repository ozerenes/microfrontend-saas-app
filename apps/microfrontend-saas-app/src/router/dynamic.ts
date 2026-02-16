import type { RouteRecordRaw } from 'vue-router';
import { router } from './index';

/** Shell'deki layout route adı; remote route'lar bu parent altına child olarak eklenir. */
export const MAIN_LAYOUT_ROUTE_NAME = 'main-layout';

/**
 * Remote'lardan gelen rotaları shell router'a ekler.
 * Route'lar shell'in MainLayout'u altında child olarak eklenir; layout shell'de kaldığı için
 * remote'dan gelen her route'un component'ı sadece view (içerik) component'idir, layout değildir.
 *
 * @param routes - Remote'dan gelen route tanımları (path, name, component; component = view only)
 * @param parentName - Parent route adı (varsayılan: main-layout)
 */
export function addRemoteRoutes(
  routes: RouteRecordRaw[],
  parentName: string = MAIN_LAYOUT_ROUTE_NAME
): void {
  for (const route of routes) {
    router.addRoute(parentName, route);
  }
}
