import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/Yuvaan2k25/',
  build: {
    assetsDir: '',  // This is important - it will put assets at root level
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Preserve the original path structure
          return `[name][extname]`;
        },
      }
    }
  }
})
