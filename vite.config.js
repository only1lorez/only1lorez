import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-static';

export default {
  plugins: [sveltekit()],
  build: {
    assetsDir: 'static',
  },
  server: {
    // Добавьте правило для обслуживания статических файлов
    fs: {
      allow: ['static'],
    },
  },
  kit: {
    // Используйте адаптер для обработки статических файлов
    adapter: adapter(),
  },
};