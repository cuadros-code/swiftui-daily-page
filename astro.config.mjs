// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SwiftUI Daily',
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/cuadros-code/swiftui-daily-blog',
			},
			sidebar: [
				{
					label: 'Components',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Pull to Refresh', slug: 'components/refresh' },
						{ label: 'Context Menu - Badge', slug: 'components/context-menu' },
					],
				},
				{
					label: 'Tutorials',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'View Data SwiftData', slug: 'components/see-swift-data' },
					],
				},
			],
		}),
	],
});
