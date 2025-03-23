import { useState, useEffect } from 'react';
import logo from '../assets/images/white_logo.jpg';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className={`header ${isScrolled ? 'scrolled' : ''}`}>
			<nav className="navbar">
				<Link to="/" className="logo" onClick={closeMobileMenu}>
					<img src={logo} alt="Stride Logo" className="logo-image" />
				</Link>
				<div
					className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
					onClick={toggleMobileMenu}
				>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>
				<ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
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
