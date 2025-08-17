#!/usr/bin/env node
/* scripts/copy-shells.cjs */
const fs = require('fs');
const path = require('path');

const routes = [
	'/about-us',
	'/services',
	'/booking',
	'/contact-us',
	'/faq',
	'/referral',
];

const distDir = path.resolve(__dirname, '..', 'dist');
const templatePath = path.resolve(
	__dirname,
	'..',
	'public',
	'_route-shell.html'
);
const appEntry = path.join(distDir, 'assets'); // Vite bundles to /assets
const hasTemplate = fs.existsSync(templatePath);

if (!fs.existsSync(distDir)) {
	console.error('❌ dist/ not found. Run "npm run build" first.');
	process.exit(1);
}
if (!hasTemplate) {
	console.error('❌ public/_route-shell.html not found.');
	process.exit(1);
}

// Read template
const tpl = fs.readFileSync(templatePath, 'utf8');

// Write each route shell with route-specific canonical/og:url
for (const route of routes) {
	const outDir = path.join(distDir, route);
	fs.mkdirSync(outDir, { recursive: true });

	// ensure no double slash in canonical; template expects no trailing slash in __PATH__
	const pathForCanonical = route.endsWith('/') ? route.slice(0, -1) : route;
	const html = tpl.replaceAll('__PATH__', pathForCanonical);

	fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
}

// Create a proper 404 (noindex) that still loads the app
const indexShell = tpl
	.replace(
		'<meta name="robots" content="index, follow" />',
		'<meta name="robots" content="noindex, nofollow" />'
	)
	.replaceAll('__PATH__', ''); // fallback
fs.writeFileSync(path.join(distDir, '404.html'), indexShell, 'utf8');

console.log(
	'Route shells written:',
	routes.map((r) => `${r}/index.html`).join(', ')
);
