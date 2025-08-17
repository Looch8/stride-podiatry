import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Elevate header on scroll
	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Lock body scroll when mobile menu is open + close on Escape
	useEffect(() => {
		document.documentElement.style.overflow = isMobileMenuOpen
			? 'hidden'
			: '';
		const onKey = (e) => e.key === 'Escape' && setIsMobileMenuOpen(false);
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [isMobileMenuOpen]);

	const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	return (
		<header className={`header ${isScrolled ? 'scrolled' : ''}`}>
			{/* Backdrop for mobile menu */}
			<div
				className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
				onClick={closeMobileMenu}
				aria-hidden="true"
			/>

			<nav className="navbar" role="navigation" aria-label="Primary">
				<Link
					to="/"
					className="logo"
					onClick={closeMobileMenu}
					aria-label="Stride Podiatry — Home"
				>
					{/* Keep width/height for CLS; CSS will still control visual height */}
					<img
						src={logo}
						alt="Stride Podiatry"
						className="logo-image"
						width="320"
						height="80"
						fetchPriority="high"
						decoding="async"
					/>
				</Link>

				<button
					className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
					onClick={toggleMobileMenu}
					aria-controls="primary-navigation"
					aria-expanded={isMobileMenuOpen}
					aria-label={
						isMobileMenuOpen
							? 'Close navigation menu'
							: 'Open navigation menu'
					}
					type="button"
				>
					<span className="bar" />
					<span className="bar" />
					<span className="bar" />
				</button>

				<ul
					id="primary-navigation"
					className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
				>
					<li>
						<NavLink
							to="/"
							end
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								isActive ? 'active' : undefined
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/services/"
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								isActive ? 'active' : undefined
							}
						>
							Services
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about-us/"
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								isActive ? 'active' : undefined
							}
						>
							About
						</NavLink>
					</li>
					<li className="nav-cta--mobile">
						<NavLink
							to="/booking/"
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								isActive ? 'active' : undefined
							}
						>
							Booking
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact-us/"
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								isActive ? 'active' : undefined
							}
						>
							Contact Us
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/referral/"
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								isActive ? 'active' : undefined
							}
						>
							Referrals
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/faq/"
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								isActive ? 'active' : undefined
							}
						>
							FAQ
						</NavLink>
					</li>
				</ul>

				{/* Desktop CTA */}
				<Link
					to="/booking/"
					className="nav-cta"
					onClick={closeMobileMenu}
				>
					Book Now
				</Link>
			</nav>
		</header>
	);
};

export default Header;
