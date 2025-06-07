import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { plugin as mdPlugin, Mode as MdMode } from 'vite-plugin-markdown';
import viteImagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    mdPlugin({
      mode: [MdMode.HTML, MdMode.TOC],
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  assetsInclude: ['**/*.md'],
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
