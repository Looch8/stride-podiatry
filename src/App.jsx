import './styles/App.css';
import logo from './assets/images/Stride_logo.jpg';
import { Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

const App = () => {
	return (
		<div className="app-container">
			<header className="header">
				<nav className="navbar">
					<div className="logo">
						<img
							src={logo}
							alt="Stride Logo"
							className="logo-image"
						/>
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

			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/booking" element={<Booking />} />
					<Route path="/contact-us" element={<Contact />} />
				</Routes>
			</main>

			<footer className="footer">
				<p>&copy; 2024 Stride Podiatry. All Rights Reserved.</p>
			</footer>
		</div>
	);
};

export default App;
