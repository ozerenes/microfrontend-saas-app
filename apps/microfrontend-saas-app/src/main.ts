import './styles.scss';
import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from '@micro-saas-app/app/App.vue';
import { router } from '@micro-saas-app/router';
import { bootstrap } from '@micro-saas-app/core/bootstrap';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

(async () => {
  await bootstrap([]);
  app.use(PrimeVue, {
    theme: { preset: Aura },
  });
  app.mount('#root');
})();
