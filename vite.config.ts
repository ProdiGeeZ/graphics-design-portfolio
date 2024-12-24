import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		proxy: {
			'/use.typekit.net': 'https://use.typekit.net',
		},
	},
	build: {
		outDir: 'dist',
	},
});
