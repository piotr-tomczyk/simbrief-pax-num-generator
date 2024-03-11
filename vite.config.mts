import { crx } from '@crxjs/vite-plugin';
import { defineConfig } from 'vite';
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [crx({ manifest }),],
})
