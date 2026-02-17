export interface ManifestRemote {
  entry: string;
  version: string;
}

export interface RemoteManifest {
  version: string;
  remotes: Record<string, ManifestRemote>;
}

const MANIFEST_URL = '/remote-manifest.json';

let manifestPromise: Promise<RemoteManifest> | null = null;

/**
 * Loads remote manifest once and caches the promise. Safe to call multiple times.
 * On 404 or network error returns empty manifest so shell can boot without remotes.
 */
export function loadManifest(): Promise<RemoteManifest> {
  if (!manifestPromise) {
    manifestPromise = fetch(MANIFEST_URL)
      .then((res) => {
        if (!res.ok) return { version: '0.0.0', remotes: {} } as RemoteManifest;
        return res.json() as Promise<RemoteManifest>;
      })
      .catch(() => ({ version: '0.0.0', remotes: {} } as RemoteManifest))
      .then((manifest) => {
        manifestCache = manifest;
        return manifest;
      });
  }
  return manifestPromise;
}

/** In-memory cache of loaded manifest for sync getRemoteEntryUrl after load. */
let manifestCache: RemoteManifest | null = null;

/**
 * Returns the remote entry URL for a given remote name. Requires manifest to be loaded first.
 * Call loadManifest() before using this, or use loadRemote(name) which resolves entry via manifest.
 */
export function getRemoteEntryUrl(name: string): string | undefined {
  if (manifestCache) return manifestCache.remotes[name]?.entry;
  return undefined;
}

/**
 * Ensures manifest is loaded and cached for getRemoteEntryUrl. Idempotent.
 */
export async function ensureManifestLoaded(): Promise<RemoteManifest> {
  return loadManifest();
}
