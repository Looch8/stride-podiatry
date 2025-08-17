#!/usr/bin/env node
/* scripts/copy-shells.cjs */
const fs = require('fs');
const path = require('path');

const routes = [
	'about-us',
	'services',
	'booking',
	'contact-us',
	'faq',
	'referral',
];

const distDir = path.resolve(__dirname, '..', 'dist');
const srcIndex = path.join(distDir, 'index.html');

if (!fs.existsSync(srcIndex)) {
	console.error('❌ dist/index.html not found. Run "npm run build" first.');
	process.exit(1);
}

const html = fs.readFileSync(srcIndex, 'utf8');

// Guard: built index **must not** reference /src/
if (html.includes('/src/')) {
	console.error('❌ Built dist/index.html still references /src/.');
	console.error(
		'   Remove any public/index.html and rebuild. Vite should rewrite to /assets/*.js.'
	);
	process.exit(1);
}

// Optional: sanity check for <base href="/">
if (!/\<base\s+href="\/"\s*\/?\>/.test(html)) {
	console.warn(
		'⚠️ index.html is missing <base href="/"> — assets might not resolve from subpaths.'
	);
}

for (const r of routes) {
	const outDir = path.join(distDir, r);
	fs.mkdirSync(outDir, { recursive: true });
	fs.writeFileSync(path.join(outDir, 'index.html'), html);
}

fs.writeFileSync(path.join(distDir, '404.html'), html);

console.log(
	`Route shells copied to: ${routes
		.map((r) => `/${r}/index.html`)
		.join(', ')}`
);
