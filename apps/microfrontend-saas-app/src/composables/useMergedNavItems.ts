import { computed } from 'vue';
import { navItems } from '@micro-saas-app/config';
import { getMenuItems } from '@micro-saas-app/core/pluginEngine';
import type { NavItem } from '@micro-saas-app/types/plugin';

/** Config NavItem is compatible (label, icon, route). */
const shellItems: NavItem[] = navItems;

/**
 * Single source for sidebar/nav: shell nav items + plugin menu items.
 * Use in AppSidebar (or any single nav consumer).
 */
export function useMergedNavItems(): { items: NavItem[] } {
  const items = computed(() => [...shellItems, ...getMenuItems()]);
  return { items };
}
