import type { NavItem, Plugin, PluginContext } from '@micro-saas-app/types/plugin';

const plugins: Plugin[] = [];

export function registerPlugin(plugin: Plugin): void {
  if (!plugins.some((p) => p.id === plugin.id)) {
    plugins.push(plugin);
  }
}

export function getPlugins(): readonly Plugin[] {
  return plugins;
}

export function getMenuItems(): NavItem[] {
  return plugins
    .filter((p): p is Plugin & { menuItem: NonNullable<Plugin['menuItem']> } => !!p.menuItem)
    .map((p) => p.menuItem);
}

let pluginContext: PluginContext | null = null;

/**
 * Provides the plugin context (app, router, pinia, slots). Call once when layout is mounted.
 * Invokes mount() on all registered plugins that define it.
 */
export function providePluginContext(context: PluginContext): void {
  pluginContext = context;
  for (const plugin of plugins) {
    try {
      plugin.mount?.(context);
    } catch (err) {
      console.error(`[pluginEngine] mount failed for plugin "${plugin.id}"`, err);
    }
  }
}

export function getPluginContext(): PluginContext | null {
  return pluginContext;
}
