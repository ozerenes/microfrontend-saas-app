# 📋 Microfrontend SaaS Admin Platform – Roadmap

**Setup branch:** `chore/workspace-setup` (tüm setup commit’leri bu branch’te)

## Phase 0 – Workspace Setup ✅

> **Mevcut durum:** Workspace adı `microfrontend-saas-app`, ana uygulama da `microfrontend-saas-app`. Roadmap’teki `shell` / `microfrontend-saas-admin` isimleri ileride yeniden adlandırma veya yeni shell app eklenerek uyarlanabilir.

- [x] Nx workspace oluştur (`microfrontend-saas-app` – admin yerine mevcut isim)
- [ ] Application name → `shell` (şu an: `microfrontend-saas-app`)
- [x] Framework → `Vue`
- [x] Bundler → `Vite`
- [x] Unit test runner → `Vitest`
- [x] E2E test runner → `Playwright`
- [x] CSS preprocessor → `SASS (.scss)`
- [x] ESLint → YES
- [x] Pinia → YES (shared state strategy için)
- [x] Routing → YES

---

## Phase 1 – Shell App Foundation 🏗️

- [ ] Basic layout (`MainLayout.vue`)
- [ ] Sidebar + header + slot content
- [ ] Router skeleton oluştur
- [ ] Pinia store setup (root)
- [ ] Auth guard basic
- [ ] Nx lint & test çalıştır

---

## Phase 2 – First Remote App: `users-app` 🧩

- [ ] App generator: `nx g @nx/vue:app users-app`
- [ ] Module entry (`module.ts`) oluştur
- [ ] Views & store folder yapısı
- [ ] SCSS setup (component scoped)
- [ ] Vite Module Federation config (`remoteEntry.js`)

---

## Phase 3 – Microfrontend Integration 🔗

- [ ] Shell vite.config.ts → remotes register
- [ ] Runtime route dynamic import: `/users` → `users_app/UsersModule`
- [ ] Pinia shared injection test
- [ ] Nx affected:build test

---

## Phase 4 – Additional Remotes 🛠️

- [ ] `billing-app` oluştur
- [ ] `analytics-app` oluştur
- [ ] `settings-app` oluştur
- [ ] RemoteEntry + Module Federation config
- [ ] Route + Shell integration

---

## Phase 5 – Shared State & Plugins 🧠

- [ ] Shared Pinia instance injection
- [ ] Plugin engine lib (`libs/plugin-engine`)
- [ ] Plugin interface / contract
- [ ] Shell plugin registration dynamic
- [ ] Remote plugin mount test

---

## Phase 6 – Runtime Loading & Versioning 🚀

- [ ] `remote-manifest.json` oluştur
- [ ] Shell loader: dynamic remoteEntry import
- [ ] Versioned remote switching test
- [ ] Plugin override test

---

## Phase 7 – Partial Builds & CI/CD ⚡

- [ ] Nx affected build: shell & remotes
- [ ] CI workflow: build + lint + test
- [ ] Nx graph validation
- [ ] Independent deploy simulation

---

## Phase 8 – Final Touches & GitHub Showcase 🎯

- [ ] README: architecture diagram (Mermaid)
- [ ] Feature table
- [ ] Why this matters section
- [ ] GitHub badges: build, test coverage, ESLint
- [ ] Demo video / GIF of microfrontend loading
