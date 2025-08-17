import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	// Close menu on ESC (nice for accessibility)
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === 'Escape') setIsMobileMenuOpen(false);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);

	return (
		<header className={`header ${isScrolled ? 'scrolled' : ''}`}>
			<nav className="navbar" role="navigation" aria-label="Primary">
				{/* Logo (left) */}
				<Link to="/" className="logo" onClick={closeMobileMenu}>
					<img
						src={logo}
						alt="Stride Podiatry logo"
						className="logo-image"
						width="180"
						height="48"
					/>
				</Link>

				{/* Hamburger (forced to far right) */}
				<button
					className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
					onClick={toggleMobileMenu}
					aria-controls="primary-navigation"
					aria-expanded={isMobileMenuOpen}
					aria-label="Toggle navigation menu"
				>
					<span className="bar" />
					<span className="bar" />
					<span className="bar" />
				</button>

				{/* Primary links */}
				<ul
					id="primary-navigation"
					className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
					onClick={(e) => {
						// only close when clicking actual links
						const anchor = e.target.closest('a');
						if (anchor) closeMobileMenu();
					}}
				>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/services">Services</Link>
					</li>
					<li>
						<Link to="/about-us">About</Link>
					</li>
					<li>
						<Link to="/booking">Booking</Link>
					</li>
					<li>
						<Link to="/contact-us">Contact Us</Link>
					</li>
					<li>
						<Link to="/referral">Referrals</Link>
					</li>
					<li>
						<Link to="/faq">FAQ</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
