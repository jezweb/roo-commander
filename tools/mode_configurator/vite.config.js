import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Define the base path for deployment (e.g., GitHub Pages)
  // Assumes the site is served from the repo name root
  base: '/roo-commander/',
})
