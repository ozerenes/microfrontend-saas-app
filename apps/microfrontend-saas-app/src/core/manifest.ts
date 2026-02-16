/** Remote manifest – içerik sonra doldurulacak. */
const REMOTES: Record<string, { entry: string }> = {};

export async function loadManifest() {
  // TODO: fetch('/remote-manifest.json') vb.
  return REMOTES;
}

export function getRemoteEntryUrl(name: string): string | undefined {
  return REMOTES[name]?.entry;
}
