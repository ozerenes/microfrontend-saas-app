import type { App } from 'vue';
import type { Router } from 'vue-router';
import type { Pinia } from 'pinia';
import type { RouteRecordRaw } from 'vue-router';

/** Nav item shape aligned with config/navigation (label, icon, route). */
export interface NavItem {
  label: string;
  icon: string;
  route: { name?: string; path?: string };
}

/**
 * Context passed to plugins on register/mount. Provides shared runtime and optional slots.
 * Slots are DOM nodes (e.g. header) for plugin UI mounting.
 */
export interface PluginContext {
  app: App;
  router: Router;
  pinia: Pinia;
  slots?: {
    header?: HTMLElement | null;
  };
}

/**
 * Plugin contract. Remotes can export a plugin to register routes, menu item, and lifecycle.
 */
export interface Plugin {
  id: string;
  name: string;
  version?: string;
  routes?: RouteRecordRaw[];
  menuItem?: NavItem;
  mount?(context: PluginContext): void;
  unmount?(): void;
}
