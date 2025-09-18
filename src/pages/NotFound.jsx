import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
	return (
		<section className="not-found">
			<Helmet>
				<title>404 - Page Not Found | Stride Podiatry</title>
				<meta
					name="description"
					content="Oops! The page you are looking for could not be found."
				/>
				<meta name="robots" content="noindex, follow" />
			</Helmet>

			<div className="not-found-container">
				<h1>404</h1>
				<h2>Page Not Found</h2>
				<p>
					Sorry, the page you’re looking for doesn’t exist or may have
					been moved.
				</p>
				<Link to="/" className="back-home-btn">
					Back to Home
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
