import { useState, useEffect } from 'react';
import logo from '../assets/images/white_logo.jpg';
import { Link } from 'react-router-dom';
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

	return (
		<header className={`header ${isScrolled ? 'scrolled' : ''}`}>
			<nav className="navbar" role="navigation" aria-label="Primary">
				<Link to="/" className="logo" onClick={closeMobileMenu}>
					<img
						src={logo}
						alt="Stride Podiatry logo"
						className="logo-image"
					/>
				</Link>

				<button
					className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
					onClick={toggleMobileMenu}
					aria-controls="primary-navigation"
					aria-expanded={isMobileMenuOpen}
					aria-label="Toggle navigation menu"
				>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>

				<ul
					id="primary-navigation"
					className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
				>
					<li>
						<Link to="/" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/services" onClick={closeMobileMenu}>
							Services
						</Link>
					</li>
					<li>
						<Link to="/about-us" onClick={closeMobileMenu}>
							About
						</Link>
					</li>
					<li>
						<Link to="/booking" onClick={closeMobileMenu}>
							Booking
						</Link>
					</li>
					<li>
						<Link to="/contact-us" onClick={closeMobileMenu}>
							Contact Us
						</Link>
					</li>
					<li>
						<Link to="/referral" onClick={closeMobileMenu}>
							Referrals
						</Link>
					</li>
					<li>
						<Link to="/faq" onClick={closeMobileMenu}>
							FAQ
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
