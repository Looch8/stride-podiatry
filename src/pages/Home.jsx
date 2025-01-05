import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main className="main-content">
			<section className="home-section">
				<h2>Welcome to Stride Podiatry</h2>
				<h3>Servicing all of Adelaide, South Australia.</h3>
				<p>
					We offer home visits for a range of podiatry services,
					including assessments, treatments, and care for conditions
					such as bunions, ingrown toenails, and plantar fasciitis.
				</p>
				<div className="book-now">
					<h2>Ready to Take the First Step?</h2>
					<p>
						Book your home visit appointment today and enjoy
						professional podiatry care in the comfort of your home!
					</p>

					<Link to="/booking" className="book-now-button">
						Book Now
					</Link>
				</div>
			</section>
		</main>
	);
};

export default Home;
