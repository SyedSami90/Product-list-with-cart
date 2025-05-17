import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // (add this line to the current)
export default defineConfig({
  plugins: [
    tailwindcss(),// (add this line to the current)
  ],
})