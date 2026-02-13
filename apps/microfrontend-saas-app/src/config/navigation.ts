export interface NavItemRoute {
  name?: string;
  path?: string;
}

export interface NavItem {
  label: string;
  icon: string;
  route: NavItemRoute;
}

export const navItems: NavItem[] = [
  { label: 'Ana Sayfa', icon: 'pi pi-home', route: { name: 'home' } },
];
