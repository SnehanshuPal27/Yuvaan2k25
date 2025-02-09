import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: './', // This is important - use relative paths
  build: {
    assetsDir: '',
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]'
      }
    }
  }
})
