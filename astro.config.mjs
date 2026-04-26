// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://fwdcast.github.io',
	integrations: [
		starlight({
			title: 'Proyecto FORECAST',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fwdcast/fwdcast.github.io' }],
			sidebar: [
				{
					label: 'Proyecto',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Inicio', slug: '' },
						{ label: 'Actualizaciones', slug: 'actualizaciones' },
						{ label: 'Transparencia', slug: 'transparencia' },
						{ label: 'Contacto y feedback', slug: 'contacto' },
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

