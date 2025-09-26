// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // *** CRITICAL FIX FOR GITHUB PAGES BLANK PAGE ***
  // Setting base to an empty string ('') tells Vite to use relative paths (./) 
  // for all injected assets, which works reliably for GitHub Pages hosting 
  // on a custom domain or a project page.
  base: '', 
  
  plugins: [react()],
  
  // Configuration for shadcn/ui components (if you use paths like '@/components')
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
