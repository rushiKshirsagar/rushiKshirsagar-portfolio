import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update base to match your GitHub repo name (e.g., '/repo-name/' or '/' for username.github.io)
  base: process.env.NODE_ENV === 'production' ? '/rushiKshirsagar-portfolio/' : '/',
})
