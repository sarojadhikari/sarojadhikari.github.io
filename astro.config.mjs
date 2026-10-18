import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sarojadhikari.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
