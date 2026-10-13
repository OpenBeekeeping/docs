// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.openbeekeeping.org',
	integrations: [
		starlight({
			title: 'Open Beekeeping docs',
			description: 'How to use, run and contribute to Open Beekeeping’s open source tools for beekeepers.',
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/OpenBeekeeping' }],
			editLink: { baseUrl: 'https://github.com/OpenBeekeeping/docs/edit/main/' },
			components: { SiteTitle: './src/components/SiteTitle.astro' },
			customCss: ['@openbeekeeping/design/openbeekeeping.css', './src/styles/theme.css'],
			sidebar: [
				{ label: 'Start here', items: ['index', 'about'] },
				{ label: 'Your account', items: [{ autogenerate: { directory: 'accounts' } }] },
				{ label: 'OpenBKA', items: [{ autogenerate: { directory: 'openbka' } }] },
				{ label: 'Design system', items: [{ autogenerate: { directory: 'design' } }] },
				{ label: 'Contributing', items: ['contributing'] },
			],
		}),
	],
});
