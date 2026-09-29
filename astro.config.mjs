// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://zhangzaibin.github.io',
	base: '/evolving-machines/',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh'],
		routing: { prefixDefaultLocale: false },
	},
	integrations: [sitemap()],
	prefetch: true,
});
