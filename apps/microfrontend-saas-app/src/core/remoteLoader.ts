import type { RemoteModule } from '@micro-saas-app/types/remote';
import { getRemoteEntryUrl } from './manifest';

/** Remote yükle – içerik sonra doldurulacak (Module Federation / dynamic import). */
export async function loadRemote(name: string): Promise<RemoteModule | null> {
  const entry = getRemoteEntryUrl(name);
  if (!entry) return null;
  // TODO: dynamic import(entry) veya container.get()
  return null;
}
