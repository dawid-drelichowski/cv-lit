import type { UserConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default {
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext',
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  plugins: [
    checker({ typescript: true })
  ]
} satisfies UserConfig;
