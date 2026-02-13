<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <div class="main-layout">
    <header class="main-layout__header">
      <span>Header</span>
      <Button label="PrimeVue" icon="pi pi-check" />
    </header>
    <aside class="main-layout__sidebar">Sidebar</aside>
    <main class="main-layout__content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar content';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}

.main-layout__header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid var(--border-color, #eee);
}

.main-layout__sidebar {
  grid-area: sidebar;
  border-right: 1px solid var(--border-color, #eee);
}

.main-layout__content {
  grid-area: content;
  padding: 1rem;
}
</style>
