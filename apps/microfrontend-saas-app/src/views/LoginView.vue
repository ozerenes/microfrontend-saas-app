<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@micro-saas-app/stores/auth';

const router = useRouter();
const auth = useAuthStore();

function login() {
  auth.setToken('demo-token');
  auth.setUser({ id: '1', email: 'user@example.com' });
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="login-view">
    <h1>Giriş</h1>
    <p>Shell auth – içerik sonra doldurulacak.</p>
    <button type="button" @click="login">Demo giriş</button>
  </div>
</template>

<style scoped>
.login-view {
  max-width: 20rem;
  margin: 2rem auto;
  text-align: center;
}
.login-view button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
}
</style>
