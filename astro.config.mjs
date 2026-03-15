// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Proyecto FORECAST',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Hitos',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Hitos y WP', slug: 'hitos/hitos' },
						{ label: 'Hito 1 - Conceptualización', slug: 'hitos/conceptualizacion' },
						{ label: 'Hito 2 - Consultas', slug: 'hitos/consultas' },
						{ label: 'Hito 3 - Desarrollo I', slug: 'hitos/desarrolloi' },
						{ label: 'Hito 4 - Desarrollo II', slug: 'hitos/desarrolloii' },
						{ label: 'Hito 5 - Difusión', slug: 'hitos/difusion' },
					],
				},
			],
		}),
	],
});

