import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sports-meets-web/',
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
});
