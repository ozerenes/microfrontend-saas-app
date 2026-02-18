import { defineStore } from 'pinia';

const AUTH_KEY = 'auth-token';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as { id: string; email?: string } | null,
    ready: false,
  }),
  getters: {
    isAuthenticated: (s) => !!s.token,
  },
  actions: {
    setToken(token: string | null) {
      this.token = token;
      if (token) localStorage.setItem(AUTH_KEY, token);
      else localStorage.removeItem(AUTH_KEY);
    },
    setUser(user: { id: string; email?: string } | null) {
      this.user = user;
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem(AUTH_KEY);
    },
    hydrateFromStorage(): void {
      const t = localStorage.getItem(AUTH_KEY);
      if (t) this.token = t;
      this.ready = true;
    },
  },
});
