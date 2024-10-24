/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  keyframes: {
			rotar: {
			  '0%': { transform: 'rotateY(180deg)' },
			  '100%': { transform: 'rotateY(-180deg)' },
			},
			
		  },
		  animation: {
			rotar: 'rotar 5s linear infinite',

			
		  },
		},
	  },
	  plugins: [],
}
