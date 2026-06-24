// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Swap `site` to the real domain when the client connects one.
export default defineConfig({
  site: 'https://abundantairac.com',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
