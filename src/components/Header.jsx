import logo from '../assets/images/Stride_logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<nav className="navbar">
				<div className="logo">
					<img src={logo} alt="Stride Logo" className="logo-image" />
					<span>Stride Podiatry</span>
				</div>
				<ul className="nav-links">
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
				</ul>
			</nav>
		</header>
	);
};

export default Header;
