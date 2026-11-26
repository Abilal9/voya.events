import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the custom domain root (https://voya.events), so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { port: 5173, strictPort: false },
});
