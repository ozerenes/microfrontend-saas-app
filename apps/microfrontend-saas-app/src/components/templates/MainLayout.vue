<script setup lang="ts">
import { ref } from 'vue';
import {
  AppSidebar,
  ContentHeader,
  LogoIcon,
} from '@micro-saas-app/components';
import { Button } from 'primevue';

const drawerVisible = ref(false);
</script>

<template>
  <div class="main-layout">
    <!-- Mobile: header with logo + hamburger -->
    <header class="main-layout__header">
      <RouterLink to="/" class="main-layout__logo-link">
        <LogoIcon class="main-layout__logo" />
        <span class="main-layout__title">SaaS App</span>
      </RouterLink>
      <Button
        type="button"
        icon="pi pi-bars"
        variant="text"
        class="main-layout__menu-btn"
        aria-label="Menüyü aç"
        @click="drawerVisible = true"
      />
    </header>

    <div class="main-layout__sidebar">
      <AppSidebar v-model:drawer-visible="drawerVisible" />
    </div>

    <div class="main-layout__content-wrap">
      <ContentHeader />
      <main class="main-layout__content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  display: grid;
  min-height: 100vh;
  grid-template-areas: 'header' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}

.main-layout__header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  min-height: 3.5rem;
  border-bottom: 1px solid var(--p-surface-200, #e5e7eb);
  background: var(--p-surface-0, #fff);
}

.main-layout__logo-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--p-text-color, #111);
}

.main-layout__logo {
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
}

.main-layout__title {
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: -0.01em;
}

.main-layout__sidebar {
  display: none;
}

.main-layout__content-wrap {
  grid-area: content;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  background: var(--p-surface-50, #f9fafb);
}

.main-layout__content {
  flex: 1;
  padding: 1rem;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Desktop: sidebar + content (header like reference) */
@media (min-width: 768px) {
  .main-layout {
    grid-template-areas: 'sidebar content';
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
  }

  .main-layout__header {
    display: none;
  }

  .main-layout__sidebar {
    display: block;
    grid-area: sidebar;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    min-height: 0;
  }

  .main-layout__content {
    padding: 1.5rem;
  }
}
</style>
