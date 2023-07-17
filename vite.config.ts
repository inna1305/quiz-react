import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import sass from 'sass';


export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@scss': resolve(__dirname, 'src/scss'),
      '@base': resolve(__dirname, 'src/base'),
      'types': resolve(__dirname, 'src/types'),
      '@pages': resolve(__dirname, 'src/pages'),
    },
  },
});
