import './styles.scss';
import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from '@micro-saas-app/app/App.vue';
import { router } from '@micro-saas-app/router';
import { useAuthStore } from '@micro-saas-app/stores/auth';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
useAuthStore(pinia).hydrateFromStorage();
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount('#root');
