import type { RouteRecordRaw } from 'vue-router';
import type { Plugin } from './plugin';

/**
 * Remote contract: Layout stays in shell; remotes export views only.
 * Route `component` must be view-only (no layout).
 */
export type RemoteViewRoute = RouteRecordRaw;

/**
 * Remote module contract. Shell loads via dynamic import; may expose plugin and/or routes.
 */
export interface RemoteModule {
  /** Optional plugin (id, name, routes, menuItem, mount/unmount). */
  plugin?: Plugin;
  /** View-only route definitions; injected under main-layout. */
  routes?: RemoteViewRoute[];
  /** @deprecated Prefer plugin.menuItem. Kept for backward compatibility. */
  menuItem?: {
    label: string;
    icon?: string;
    route: { name?: string; path?: string };
  };
}
