#!/usr/bin/env node
/* scripts/copy-shells.cjs
 * Copies dist/index.html to each route AND injects route-specific
 * <link rel="canonical">, <title>, and <meta name="description">.
 * Also writes a proper 404.html with noindex.
 */
const fs = require('fs');
const path = require('path');

const site = 'https://stride-podiatry.com.au';

const pages = [
	{
		route: '/', // writes back to dist/index.html too
		out: 'index.html',
		canonical: `${site}/`,
		title: 'Stride Podiatry | Mobile Podiatrist Adelaide — Home Visits',
		description:
			'Expert mobile podiatry across Adelaide. Home visit foot care, ingrown toenails, heel pain, diabetic assessments, orthotics and more. No referral needed—book online.',
	},
	{
		route: '/about-us/',
		out: 'about-us/index.html',
		canonical: `${site}/about-us/`,
		title: 'About Stride Podiatry | Mobile Podiatrist in Adelaide',
		description:
			'Meet Luke Wheldale and learn about Stride Podiatry’s mission to deliver convenient, expert foot care at home across Adelaide.',
	},
	{
		route: '/services/',
		out: 'services/index.html',
		canonical: `${site}/services/`,
		title: 'Mobile Podiatry Services in Adelaide | Stride Podiatry',
		description:
			'General foot care, ingrown toenail treatment, diabetes foot care, biomechanical assessment, custom orthotics, sports podiatry and more—at your home.',
	},
	{
		route: '/booking/',
		out: 'booking/index.html',
		canonical: `${site}/booking/`,
		title: 'Book a Home Visit | Stride Podiatry',
		description:
			'Request a mobile podiatry appointment in Adelaide. No referral needed. Medicare (CDM), NDIS and DVA supported.',
	},
	{
		route: '/contact-us/',
		out: 'contact-us/index.html',
		canonical: `${site}/contact-us/`,
		title: 'Contact Stride Podiatry | Mobile Podiatrist Adelaide',
		description:
			'Call 0468 518 993 or email luke@stride-podiatry.com.au. We’re here to help with mobile podiatry questions and bookings across Adelaide.',
	},
	{
		route: '/faq/',
		out: 'faq/index.html',
		canonical: `${site}/faq/`,
		title: 'FAQ | Stride Podiatry Mobile Care',
		description:
			'Answers about mobile podiatry, Medicare CDM plans, NDIS, DVA, service areas, and what to expect during a home visit.',
	},
	{
		route: '/referral/',
		out: 'referral/index.html',
		canonical: `${site}/referral/`,
		title: 'Refer a Patient | Stride Podiatry',
		description:
			'GPs, care coordinators and support providers—download the referral form and refer patients for mobile podiatry across Adelaide.',
	},
];

const distDir = path.resolve(__dirname, '..', 'dist');
const rootIndex = path.join(distDir, 'index.html');

if (!fs.existsSync(rootIndex)) {
	console.error('❌ dist/index.html not found. Run "npm run build" first.');
	process.exit(1);
}

let baseHtml = fs.readFileSync(rootIndex, 'utf8');

/** Helpers to replace or insert tags safely */
function upsertCanonical(html, href) {
	const re = /<link\s+rel=["']canonical["'][^>]*>/i;
	const tag = `  <link rel="canonical" href="${href}" />`;
	if (re.test(html)) {
		return html.replace(re, tag);
	}
	return html.replace(/<\/head>/i, `${tag}\n</head>`);
}

function upsertTitle(html, title) {
	if (/<title>.*<\/title>/is.test(html)) {
		return html.replace(/<title>.*?<\/title>/is, `<title>${title}</title>`);
	}
	return html.replace(/<\/head>/i, `  <title>${title}</title>\n</head>`);
}

function upsertMetaDescription(html, description) {
	const re = /<meta[^>]+name=["']description["'][^>]*>/i;
	const tag = `  <meta name="description" content="${escapeHtml(
		description
	)}" />`;
	if (re.test(html)) {
		// replace the content=... part
		return html.replace(
			re,
			`<meta name="description" content="${escapeHtml(description)}" />`
		);
	}
	return html.replace(/<\/head>/i, `${tag}\n</head>`);
}

function setRobotsNoindex(html) {
	const re = /<meta[^>]+name=["']robots["'][^>]*>/i;
	const tag = `  <meta name="robots" content="noindex, follow" />`;
	if (re.test(html)) {
		return html.replace(re, tag);
	}
	return html.replace(/<\/head>/i, `${tag}\n</head>`);
}

function escapeHtml(s) {
	return s
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

/** Write each page shell with correct canonical + meta */
for (const page of pages) {
	let outHtml = baseHtml;
	outHtml = upsertCanonical(outHtml, page.canonical);
	outHtml = upsertTitle(outHtml, page.title);
	outHtml = upsertMetaDescription(outHtml, page.description);

	const outPath = path.join(distDir, page.out);
	fs.mkdirSync(path.dirname(outPath), { recursive: true });
	fs.writeFileSync(outPath, outHtml);
}

/** Also create a 404.html that won’t be indexed */
let notFound = baseHtml;
notFound = setRobotsNoindex(notFound);
// For safety, remove any canonical on 404
notFound = notFound.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '');
fs.writeFileSync(path.join(distDir, '404.html'), notFound);

console.log(
	'✅ Route shells written with per-page canonical/title/description:',
	pages.map((p) => `/${p.out}`).join(', ')
);
