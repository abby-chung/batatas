import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/batatas/',
  build: {
    emptyOutDir: true, // ensures dist is cleared before building
  }
});
