import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from '@micro-saas-app/app/App.vue';
import HomeView from '@micro-saas-app/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'home', component: HomeView }],
});

describe('App', () => {
  it('renders properly', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createPinia(), router],
      },
    });
    await router.isReady();
    expect(wrapper.text()).toContain(
      'Welcome @microfrontend-saas-app/microfrontend-saas-app 👋',
    );
  });
});
