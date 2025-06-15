import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { plugin as mdPlugin, Mode as MdMode } from 'vite-plugin-markdown';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin({
      mode: [MdMode.VUE],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 将每个新闻文章及其资源分割为单独的chunk
          const newsPath = 'content/news/';
          if (id.includes(newsPath)) {
            const path = id.split(newsPath)[1];
            const articleId = path.split('/')[0];
            return `news-${articleId}`;
          }
        },
      },
    },
  },
  server: {
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/mixin.scss" as *;',
      },
    },
  },
});
