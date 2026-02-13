<script setup lang="ts">
import { Button } from 'primevue';
import { LogoIcon } from '@micro-saas-app/components';

defineProps<{
  onClose?: () => void;
}>();
</script>

<template>
  <div class="sidebar-header">
    <div class="sidebar-header__top">
      <RouterLink to="/" class="sidebar-header__brand" @click="onClose?.()">
        <LogoIcon class="sidebar-header__logo" />
      </RouterLink>
      <Button
        v-if="onClose"
        type="button"
        icon="pi pi-times"
        rounded
        variant="text"
        class="sidebar-header__close"
        aria-label="Menüyü kapat"
        @click="onClose"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.sidebar-header__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-header__brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.95);
}

.sidebar-header__logo {
  width: 2.25rem;
  height: 2.25rem;
  flex-shrink: 0;
}

.sidebar-header__close {
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
}

.sidebar-header__overview {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sidebar-header__title {
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
}
</style>
