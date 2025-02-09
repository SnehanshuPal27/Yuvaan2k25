import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Detect if we are deploying to GitHub Pages
const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true';
const repoName = 'Yuvaan2k25'; // Your GitHub repo name
const baseURL = isGitHubPages ? `/${repoName}/` : '/'; // Set correct base

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: baseURL, // Dynamic base URL
  define: {
    __BASE_URL__: JSON.stringify(baseURL), // Pass baseURL as a global variable
  },
  build: {
    assetsDir: '', // Avoids issues with asset paths
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
});
