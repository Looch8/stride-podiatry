import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main className="main-content">
			<section className="home-section">
				<h2>Stride Podiatry – We Come to You!</h2>
				<h3>Professional Mobile Podiatry Across Adelaide</h3>
				<p>
					No referral is necessary to see a podiatrist—
					<strong>book directly with us today!</strong>
				</p>
				<p>
					We are a <strong>mobile podiatry service</strong>, meaning
					we treat you in the comfort of your home, workplace, or aged
					care facility . Our goal is to provide high-quality,
					convenient care wherever you need it.
				</p>
				<p>
					Stride Podiatry serves{' '}
					<strong>all of the Adelaide metro area</strong>. If you’re
					outside this region, feel free to contact us—{' '}
					<em>we may still be able to help.</em>
				</p>

				<div className="book-now">
					<h2>Ready to Take the First Step?</h2>
					<p>
						Book your <strong>home visit appointment</strong> today
						and experience expert podiatry care at your convenience.
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
