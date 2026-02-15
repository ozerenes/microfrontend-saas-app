<script setup lang="ts">
import { ref } from 'vue';
import { InputText, IconField, InputIcon, Button } from 'primevue';

const searchQuery = ref('');
</script>

<template>
  <header class="content-header">
    <div />
    <div class="content-header__right">
      <IconField
        icon-position="left"
        class="content-header__search-wrap"
      >
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText
          v-model="searchQuery"
          placeholder="Search"
          class="content-header__search"
          aria-label="Ara"
        />
      </IconField>
      <Button
        type="button"
        icon="pi pi-bell"
        variant="text"
        rounded
        class="content-header__notify"
        aria-label="Bildirimler"
      >
        <i class="pi pi-bell" />
        <span
          class="content-header__notify-dot"
          aria-hidden="true"
        />
      </Button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.content-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  padding: 1rem 1.25rem;
  min-height: 3.5rem;
  background: var(--p-surface-0, #fff);
  border-bottom: 1px solid var(--p-surface-200, #e5e7eb);
}

.content-header__right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.content-header__search-wrap {
  width: 100%;
  max-width: 12rem;
}

.content-header__search {
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 2.25rem;
  font-size: 0.875rem;
}

.content-header__notify {
  position: relative;

  .content-header__notify-dot {
    position: absolute;
    top: 0.35rem;
    right: 0.35rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: var(--p-red-500, #ef4444);
  }
}

@media (max-width: 767px) {
  .content-header {
    padding: 0.75rem 1rem;
  }

  .content-header__search-wrap {
    max-width: 8rem;
  }
}
</style>
