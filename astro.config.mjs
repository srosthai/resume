import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://resume.srosthai.me',
  integrations: [react(), sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
