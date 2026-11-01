import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves the site at https://srestha-maitra.github.io/my-portfolio/
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],
})
