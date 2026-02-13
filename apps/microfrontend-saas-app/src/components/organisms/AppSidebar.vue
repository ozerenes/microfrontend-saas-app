<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Drawer } from 'primevue';
import { navItems, type NavItemRoute } from '@micro-saas-app/config';
import { SidebarHeader, SidebarFooter } from '@micro-saas-app/components';

const { drawerVisible = false } = defineProps<{
  drawerVisible?: boolean;
}>();

const emit = defineEmits<{
  'update:drawerVisible': [value: boolean];
}>();

const drawerVisibleComputed = computed({
  get: () => drawerVisible,
  set: (v) => emit('update:drawerVisible', v),
});

const route = useRoute();

function isActive(itemRoute: NavItemRoute) {
  if (itemRoute.name && route.name) return route.name === itemRoute.name;
  if (itemRoute.path)
    return (
      route.path === itemRoute.path ||
      route.path.startsWith(itemRoute.path + '/')
    );
  return false;
}
</script>

<template>
  <!-- Mobile: Drawer overlay (same dark sidebar content) -->
  <Drawer
    v-model:visible="drawerVisibleComputed"
    position="left"
    class="app-sidebar-drawer app-sidebar-drawer--dark"
    :dismissable="true"
    :modal="true"
    @hide="emit('update:drawerVisible', false)"
  >
    <template #container="{ closeCallback }">
      <div class="app-sidebar__inner app-sidebar__inner--dark">
        <SidebarHeader :on-close="closeCallback" />
        <nav class="app-sidebar__nav">
          <ul class="app-sidebar__list">
            <li
              v-for="item in navItems"
              :key="item.route?.name ?? item.route?.path ?? item.label"
            >
              <RouterLink
                v-if="item.route"
                :to="item.route"
                class="app-sidebar__link"
                :class="{ 'app-sidebar__link--active': isActive(item.route) }"
                @click="emit('update:drawerVisible', false)"
              >
                <span class="app-sidebar__icon-wrap">
                  <i :class="[item.icon, 'app-sidebar__icon']" />
                </span>
                <span class="app-sidebar__label">{{ item.label }}</span>
              </RouterLink>
            </li>
          </ul>
        </nav>
        <SidebarFooter :on-close="closeCallback" />
      </div>
    </template>
  </Drawer>

  <!-- Desktop: Fixed dark sidebar -->
  <aside
    class="app-sidebar__desktop app-sidebar__desktop--dark"
    aria-label="Ana navigasyon"
  >
    <div class="app-sidebar__inner app-sidebar__inner--dark">
      <SidebarHeader />
      <nav class="app-sidebar__nav">
        <ul class="app-sidebar__list">
          <li
            v-for="item in navItems"
            :key="item.route?.name ?? item.route?.path ?? item.label"
          >
            <RouterLink
              v-if="item.route"
              :to="item.route"
              class="app-sidebar__link app-sidebar__link--desktop"
              :class="{ 'app-sidebar__link--active': isActive(item.route) }"
            >
              <span class="app-sidebar__icon-wrap">
                <i :class="[item.icon, 'app-sidebar__icon']" />
              </span>
              <span class="app-sidebar__label">{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
      <SidebarFooter />
    </div>
  </aside>
</template>

<style scoped lang="scss">
$sidebar-bg: #111113;
$sidebar-active-bg: rgba(255, 255, 255, 0.12);
$sidebar-text: rgba(255, 255, 255, 0.7);
$sidebar-text-active: #fff;

.app-sidebar-drawer {
  width: min(85vw, 20rem);

  :deep(.p-drawer-content) {
    padding: 0;
    height: 100%;
  }

  &--dark {
    :deep(.p-drawer-content) {
      background: $sidebar-bg;
    }
  }
}

.app-sidebar__desktop {
  display: none;
  width: 5.5rem;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  min-height: 0;
  background: $sidebar-bg;

  @media (min-width: 768px) {
    display: flex;
  }

  &--dark {
    background: $sidebar-bg;
  }
}

.app-sidebar__inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;

  &--dark {
    background: $sidebar-bg;
  }
}

.app-sidebar__nav {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem 0;
}

.app-sidebar__list {
  list-style: none;
  margin: 0;
  padding: 0 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.app-sidebar__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 0.75rem;
  border-radius: 0.5rem;
  color: $sidebar-text;
  text-decoration: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    color: $sidebar-text-active;
    background: rgba(255, 255, 255, 0.06);
  }

  &--active {
    color: $sidebar-text-active;
    background: $sidebar-active-bg;

    .app-sidebar__icon {
      color: $sidebar-text-active;
    }
  }

  &--desktop {
    justify-content: center;
    padding: 0.75rem;

    .app-sidebar__label {
      display: none;
    }

    .app-sidebar__icon-wrap {
      margin: 0;
    }
  }
}

.app-sidebar__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
}

.app-sidebar__icon {
  color: inherit;
  font-size: 1.25rem;
}

.app-sidebar__label {
  font-weight: 500;
  font-size: 0.9375rem;
}

/* Drawer: show labels */
.app-sidebar-drawer .app-sidebar__label {
  display: block;
}

.app-sidebar-drawer .app-sidebar__link--desktop {
  justify-content: flex-start;

  .app-sidebar__label {
    display: block;
  }
}

/* Desktop: narrow sidebar – hide welcome text */
.app-sidebar__desktop :deep(.sidebar-header__welcome) {
  display: none;
}
</style>
