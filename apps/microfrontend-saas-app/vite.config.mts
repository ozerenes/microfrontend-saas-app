/// <reference types='vitest' />
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/microfrontend-saas-app',
  resolve: {
    alias: {
      '@micro-saas-app': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    vue(),
    federation({
      name: 'shell',
      shared: {
        vue: { requiredVersion: '^3.0.0', singleton: true },
        'vue-router': { requiredVersion: '^4.0.0', singleton: true },
        pinia: { requiredVersion: '^2.0.0', singleton: true },
      },
      remotes: {},
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 600,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          const norm = id.replace(/\\/g, '/');
          if (norm.includes('/vue-router')) return 'vue-router';
          if (norm.includes('/pinia')) return 'pinia';
          if (norm.includes('/primevue/')) return 'primevue';
          if (norm.includes('/primeicons/') || norm.includes('/primeicons')) return 'primeicons';
          if (norm.includes('/@primeuix/')) return 'primevue-themes';
          return 'vendor';
        },
      },
    },
  },
  test: {
    name: '@microfrontend-saas-app/microfrontend-saas-app',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
