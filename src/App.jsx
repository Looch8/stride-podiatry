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
					<h2>Welcome to Stride Podiatry</h2>
					<p>
						Providing expert podiatry care directly to your
						doorstep.
					</p>
					<div className="book-now">
						<h3>Ready to Take the First Step?</h3>
						<p>
							Book your appointment today for professional
							podiatry care in the comfort of your home!
						</p>
						<a href="#booking" className="book-now-button">
							Book Now
						</a>
					</div>
				</section>
			</main>

			<footer className="footer">
				<p>&copy; 2024 Stride Podiatry. All Rights Reserved.</p>
			</footer>
		</div>
	);
};

export default App;
