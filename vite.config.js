import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '', // ✅ FIXED: No slash, no folder, nothing
  plugins: [react()],
});
