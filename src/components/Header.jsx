import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);

	const navRef = useRef(null);

	// Add scrolled class
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Toggle mobile menu
	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

	// Close menus
	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		setServicesOpen(false);
	};

	// Close on ESC
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === 'Escape') {
				setIsMobileMenuOpen(false);
				setServicesOpen(false);
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);

	// Close dropdown on outside click (desktop)
	useEffect(() => {
		const onDocClick = (e) => {
			if (!navRef.current) return;
			if (!navRef.current.contains(e.target)) setServicesOpen(false);
		};
		document.addEventListener('mousedown', onDocClick);
		return () => document.removeEventListener('mousedown', onDocClick);
	}, []);

	return (
		<header className={`header ${isScrolled ? 'scrolled' : ''}`}>
			<nav
				className="navbar"
				role="navigation"
				aria-label="Primary"
				ref={navRef}
			>
				{/* Logo */}
				<Link to="/" className="logo" onClick={closeMobileMenu}>
					<img
						src={logo}
						alt="Stride Podiatry logo"
						className="logo-image"
						width="180"
						height="48"
					/>
				</Link>

				{/* Hamburger button */}
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

				{/* Nav links */}
				<ul
					id="primary-navigation"
					className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
					onClick={(e) => {
						const anchor = e.target.closest('a');
						if (anchor) closeMobileMenu();
					}}
				>
					<li>
						<Link to="/">Home</Link>
					</li>

					{/* Services dropdown */}
					<li
						className={`has-dropdown ${servicesOpen ? 'open' : ''}`}
					>
						<button
							type="button"
							className="dropdown-trigger"
							aria-haspopup="true"
							aria-expanded={servicesOpen}
							onClick={(e) => {
								e.stopPropagation();
								setServicesOpen((prev) => !prev);
							}}
						>
							Services <span className="chev">▾</span>
						</button>

						<ul className="dropdown-menu" role="menu">
							<li>
								<Link to="/services">All Services</Link>
							</li>
							<li>
								<Link to="/services/general-podiatry">
									General Podiatry Care
								</Link>
							</li>
							<li>
								<Link to="/services/ingrown-toenail">
									Ingrown Toenail Treatment
								</Link>
							</li>
							<li>
								<Link to="/services/diabetes-foot-care">
									Diabetes Foot Care
								</Link>
							</li>
							<li>
								<Link to="/services/biomechanics-gait">
									Biomechanics &amp; Gait
								</Link>
							</li>
							<li>
								<Link to="/services/custom-orthotics">
									Custom Orthotics
								</Link>
							</li>
							<li>
								<Link to="/services/heel-arch-pain">
									Heel &amp; Arch Pain
								</Link>
							</li>
							<li>
								<Link to="/services/forefoot-pain">
									Forefoot Pain
								</Link>
							</li>

							<li>
								<Link to="/services/footwear-advice">
									Footwear Advice
								</Link>
							</li>
							<li>
								<Link to="/services/sports-podiatry">
									Sports Podiatry
								</Link>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/booking">Booking</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
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
