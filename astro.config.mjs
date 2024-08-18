import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ryanpc.github.io/',
	base: '/PorfolioWebsite',
	// site: 'https://example.com',
	// integrations: [mdx(), sitemap()],
});
