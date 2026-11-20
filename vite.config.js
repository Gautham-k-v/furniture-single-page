import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset URLs work on Vercel (/) and GitHub Pages (/furniture-single-page/).
  // An absolute base of "/" makes GitHub Pages load a blank page. A repo-name base
  // makes Vercel load a blank page. "./" is correct for both.
  base: "./",
  plugins: [react()],
})
