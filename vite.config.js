import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  root: '.',  // Explicitly set the root directory
  plugins: [react()],
});
