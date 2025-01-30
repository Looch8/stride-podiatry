import { useState } from 'react';
import logo from '../assets/images/white_logo.jpg';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="header">
			<nav className="navbar">
				<div className="logo">
					<img src={logo} alt="Stride Logo" className="logo-image" />
				</div>
				<div className="hamburger" onClick={toggleMobileMenu}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>
				<ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
					<li>
						<Link to="/" onClick={toggleMobileMenu}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/services" onClick={toggleMobileMenu}>
							Services
						</Link>
					</li>
					<li>
						<Link to="/about-us" onClick={toggleMobileMenu}>
							About
						</Link>
					</li>
					<li>
						<Link to="/booking" onClick={toggleMobileMenu}>
							Booking
						</Link>
					</li>
					<li>
						<Link to="/contact-us" onClick={toggleMobileMenu}>
							Contact Us
						</Link>
					</li>
					<li>
						<Link to="/faq" onClick={toggleMobileMenu}>
							FAQ
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
