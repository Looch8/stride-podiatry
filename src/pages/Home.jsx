import '../styles/Home.css';

const Home = () => {
	return (
		<main className="main-content">
			<section className="home-section">
				<h2>Welcome to Stride Podiatry</h2>
				<p>Providing expert podiatry care directly to your doorstep.</p>
				<div className="book-now">
					<h3>Ready to Take the First Step?</h3>
					<p>
						Book your appointment today for professional podiatry
						care in the comfort of your home!
					</p>
					<a
						href="https://stride-podiatry.au4.cliniko.com/bookings"
						className="book-now-button"
					>
						Book Now
					</a>
				</div>
			</section>
		</main>
	);
};

export default Home;
