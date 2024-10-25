import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


export default defineConfig({
	integrations: [
		starlight({
			title: 'A comprehensive guide to using AI with IBM i',
			social: {
				github: 'https://github.com/IBM/AI-IBMi-guide',
			},
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'AI software stacks',
					autogenerate: { directory: 'ai_stacks' },
					badge: `start here`
				},
				{
					label: 'Accessing Db2 from AI',
					autogenerate: { directory: 'access_db2' }
				},
				{
					label: 'Streaming Db2 transactions',
					autogenerate: { directory: 'stream_db2' }
				},
				{
					label: 'Streaming operational data',
					autogenerate: { directory: 'ops_data' }
				},
				{
					label: 'Calling AI from IBM i',
					autogenerate: { directory: 'access_from_i' }
				},
				{
					label: 'Code assistance',
					autogenerate: { directory: 'code_assist' }
				},
				{
					label: 'Other Useful links (external)',
					items: [
						// Using `slug` for internal links.
						{ link: 'http://ibm.com', label: "IBM" },
					],
				}
			],
			tableOfContents: {
				maxHeadingLevel: 6
			}
		}),
	],
});