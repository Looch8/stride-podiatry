/* eslint-disable */
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const routes = [
	'about-us',
	'services',
	'booking',
	'contact-us',
	'faq',
	'referral',
];

const htmlPath = path.join(dist, 'index.html');
if (!fs.existsSync(htmlPath)) {
	console.error('dist/index.html not found. Run `npm run build` first.');
	process.exit(1);
}
const html = fs.readFileSync(htmlPath, 'utf8');

for (const r of routes) {
	const dir = path.join(dist, r);
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(path.join(dir, 'index.html'), html);
}
console.log(
	'Route shells copied to:',
	routes.map((r) => `/${r}/index.html`).join(', ')
);
