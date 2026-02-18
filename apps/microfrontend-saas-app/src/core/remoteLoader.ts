import type { RemoteModule } from '@micro-saas-app/types/remote';
import { ensureManifestLoaded, getRemoteEntryUrl } from './manifest';

const remoteCache = new Map<string, Promise<RemoteModule>>();

/**
 * Loads a remote module by name. Uses optional entryUrl if provided; otherwise resolves from manifest.
 * Deduplicates in-flight and subsequent loads per name (Promise cache).
 *
 * @param name - Remote name (must exist in manifest if entryUrl is omitted)
 * @param entryUrl - Optional explicit entry URL; overrides manifest
 * @returns Remote module (plugin and/or routes)
 * @throws If entryUrl is missing and manifest has no entry for name, or dynamic import fails
 */
export async function loadRemote(
  name: string,
  entryUrl?: string
): Promise<RemoteModule> {
  const cacheKey = entryUrl ?? name;
  const existing = remoteCache.get(cacheKey);
  if (existing) return existing;

  const loader = (async (): Promise<RemoteModule> => {
    const url = entryUrl ?? await resolveEntryUrl(name);
    const mod = await import(/* @vite-ignore */ url);
    return mod as RemoteModule;
  })();

  remoteCache.set(cacheKey, loader);
  return loader;
}

async function resolveEntryUrl(name: string): Promise<string> {
  await ensureManifestLoaded();
  const entry = getRemoteEntryUrl(name);
  if (!entry) throw new Error(`No manifest entry for remote: ${name}`);
  return entry;
}
