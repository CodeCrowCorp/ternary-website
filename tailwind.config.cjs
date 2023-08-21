module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				typing: 'typing 2s steps(30), blink 1s infinite'
			},
			keyframes: {
				blink: {
					from: { 'border-right-color': 'transparent' },
					to: { 'border-right-color': 'white' }
				},
				typing: {
					from: { width: '0' },
					to: { width: '30ch' }
				}
			}
		}
	},
	daisyui: {
		themes: ['forest', 'dark', 'light', 'cyberpunk', 'synthwave']
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('daisyui'),
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('tailwind-clip-path')
	],
	variants: {
		display: ['group-hover']
	}
}
