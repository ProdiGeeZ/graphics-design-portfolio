/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'rgb(var(--background) / <alpha-value>)',
				foreground: 'rgb(var(--foreground) / <alpha-value>)',
				card: 'rgb(var(--card) / <alpha-value>)',
				'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',
				popover: 'rgb(var(--popover) / <alpha-value>)',
				'popover-foreground': 'rgb(var(--popover-foreground) / <alpha-value>)',
				primary: 'rgb(var(--primary) / <alpha-value>)',
				'primary-foreground': 'rgb(var(--primary-foreground) / <alpha-value>)',
				secondary: 'rgb(var(--secondary) / <alpha-value>)',
				'secondary-foreground': 'rgb(var(--secondary-foreground) / <alpha-value>)',
				muted: 'rgb(var(--muted) / <alpha-value>)',
				'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
				accent: 'rgb(var(--accent) / <alpha-value>)',
				'accent-foreground': 'rgb(var(--accent-foreground) / <alpha-value>)',
				destructive: 'rgb(var(--destructive) / <alpha-value>)',
				'destructive-foreground': 'rgb(var(--destructive-foreground) / <alpha-value>)',
				border: 'rgb(var(--border) / <alpha-value>)',
				input: 'rgb(var(--input) / <alpha-value>)',
				ring: 'rgb(var(--ring) / <alpha-value>)'
			},
			fontFamily: {
				heading: [
					'GeneralSans-Variable',
					'sans-serif'
				],
				body: [
					'CabinetGrotesk-Variable',
					'sans-serif'
				],
				custom1: [
					'GeneralSans-Variable',
					'sans-serif'
				],
				custom2: [
					'CabinetGrotesk-Variable',
					'serif'
				]
			},
			keyframes: {
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))'
					}
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))'
					}
				},
				gradient: {
					from: {
						backgroundPosition: '0 0'
					},
					to: {
						backgroundPosition: 'var(--bg-size) 0'
					}
				},
				ripple: {
					'0%, 100%': {
						transform: 'translate(-50%, -50%) scale(1)'
					},
					'50%': {
						transform: 'translate(-50%, -50%) scale(0.9)'
					}
				},
				rippling: {
					'0%': {
						opacity: '1'
					},
					'100%': {
						transform: 'scale(2)',
						opacity: '0'
					}
				}
			},
			animation: {
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				gradient: 'gradient 8s linear infinite',
				ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
				rippling: 'rippling var(--duration) ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
