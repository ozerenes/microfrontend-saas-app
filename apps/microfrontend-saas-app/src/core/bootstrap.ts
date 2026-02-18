import { useAuthStore } from '@micro-saas-app/stores/auth';
import { addRemoteRoutes } from '@micro-saas-app/router/dynamic';
import { ensureManifestLoaded } from './manifest';
import { loadRemote } from './remoteLoader';
import { registerPlugin } from './pluginEngine';

/**
 * Boot sequence: (1) Hydrate auth, (2) Load manifest, (3) Load critical remotes,
 * (4) Register plugins + inject routes. Call before app.mount().
 *
 * @param criticalRemoteNames - Remote names to load during bootstrap (optional).
 *        Remotes are loaded in order; each may export plugin and/or routes.
 */
export async function bootstrap(
  criticalRemoteNames: string[] = []
): Promise<void> {
  const auth = useAuthStore();
  auth.hydrateFromStorage();

  await ensureManifestLoaded();

  for (const name of criticalRemoteNames) {
    try {
      const remote = await loadRemote(name);
      if (remote.plugin) registerPlugin(remote.plugin);
      if (remote.routes?.length) addRemoteRoutes(remote.routes);
    } catch (err) {
      console.error(`[bootstrap] Failed to load remote "${name}"`, err);
    }
  }
}
