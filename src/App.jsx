import './styles/App.css';
import logo from './assets/images/Stride_logo.jpg';

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
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#about-us">About Us</a>
						</li>
						<li>
							<a href="#booking">Booking</a>
						</li>
						<li>
							<a href="#contact-us">Contact Us</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className="main-content">
				<section id="home" className="home-section">
					<h2>Welcome to Stride Podiatry,</h2>
					<p>
						Providing expert podiatry care directly to your
						doorstep.
					</p>
				</section>
			</main>

			<footer className="footer">
				<p>&copy; 2024 Stride Podiatry. All Rights Reserved.</p>
			</footer>
		</div>
	);
};

export default App;
