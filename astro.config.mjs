import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://houseofcosmos.co',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (p) => !p.includes('/thank-you/') })],
});
