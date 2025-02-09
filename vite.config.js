import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Determine the base URL dynamically
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'Yuvaan2k25'; // Your GitHub repo name
const baseURL = isGitHubPages ? `/${repoName}/` : '/'; // Set correct base

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: baseURL, // Dynamic base URL
  build: {
    assetsDir: '', // Avoids issues with asset paths
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
});
