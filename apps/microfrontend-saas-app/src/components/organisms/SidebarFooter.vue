<script setup lang="ts">
import { Avatar } from 'primevue';

defineProps<{
  onClose?: () => void;
}>();
</script>

<template>
  <div class="sidebar-footer">
    <RouterLink
      :to="{ path: '/settings' }"
      class="sidebar-footer__settings"
      @click="onClose?.()"
    >
      <i class="pi pi-cog" aria-hidden="true" />
    </RouterLink>
    <button type="button" class="sidebar-footer__user" @click="onClose?.()">
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
        class="sidebar-footer__avatar"
      />
    </button>
  </div>
</template>

<style scoped lang="scss">
.sidebar-footer {
  flex-shrink: 0;
  padding: 0.75rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.sidebar-footer__settings {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition:
    color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.95);
    background: rgba(255, 255, 255, 0.08);
  }

  .pi {
    font-size: 1.25rem;
  }
}

.sidebar-footer__user {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
  }
}

.sidebar-footer__avatar {
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
}
</style>
