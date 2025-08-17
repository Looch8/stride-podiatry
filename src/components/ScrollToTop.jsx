import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function prefersReducedMotion() {
	return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Scrolls to top on route change.
 * If there's a hash (#section), it will scroll that element into view.
 */
export default function ScrollToTop() {
	const { pathname, hash } = useLocation();

	// Disable browser's built-in restoration so we control it
	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			const { scrollRestoration } = window.history;
			window.history.scrollRestoration = 'manual';
			return () => {
				window.history.scrollRestoration = scrollRestoration;
			};
		}
	}, []);

	useEffect(() => {
		if (hash) {
			const id = decodeURIComponent(hash.slice(1));
			const el = document.getElementById(id);
			if (el) {
				el.scrollIntoView({
					behavior: prefersReducedMotion() ? 'auto' : 'smooth',
					block: 'start',
				});
				return;
			}
			// If the element isn't in the DOM yet, try on next tick
			const t = setTimeout(() => {
				const el2 = document.getElementById(id);
				if (el2)
					el2.scrollIntoView({ behavior: 'auto', block: 'start' });
			}, 0);
			return () => clearTimeout(t);
		}

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: prefersReducedMotion() ? 'auto' : 'smooth',
		});
	}, [pathname, hash]);

	return null;
}
