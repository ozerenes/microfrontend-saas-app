import type { RouteRecordRaw } from 'vue-router';

/**
 * Remote contract: Layout shell'de kalır, remote'lar sadece view export eder.
 *
 * - Shell: Tüm sayfa layout'u (sidebar, header, content alanı) shell'de tanımlıdır.
 * - Remote: Sadece route'a karşılık gelen view (içerik) component'ini export eder.
 *   Remote kendi layout'u (wrapper, sidebar, header) export etmez; sayfa layout'u shell'de kalır.
 *
 * Route'taki `component` alanı sadece sayfa içeriği (view) olmalı; layout component kullanılmaz.
 */

/**
 * Remote'dan beklenen route: path, name, component (sadece view — layout değil).
 * Vue Router'un RouteRecordRaw'ı kullanılır; tek kısıt: component = view-only.
 */
export type RemoteViewRoute = RouteRecordRaw;

/**
 * Remote modülünün shell'e export etmesi beklenen yapı.
 * routes: Sadece view component'leri içeren route tanımları (layout bilgisi yok).
 */
export interface RemoteModule {
  /** Route'a karşılık gelen view component'leri; layout shell'de. */
  routes: RemoteViewRoute[];
  /** Opsiyonel: menü öğesi (label, icon, route) — shell sidebar'a ekler. */
  menuItem?: {
    label: string;
    icon?: string;
    route: { name: string } | { path: string };
  };
}
