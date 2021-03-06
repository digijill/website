/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		trailingSlash: "ignore"
	}
};

export default config;