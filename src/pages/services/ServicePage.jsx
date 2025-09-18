import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ServicePage = ({
	title,
	metaTitle,
	metaDescription,
	canonical,
	heroSrc,
	heroAlt,
	overview,
	sections, // [{ heading, items: ['...','...'] }]
}) => {
	return (
		<section className="services service-detail">
			<Helmet>
				<title>{metaTitle || `${title} | Stride Podiatry`}</title>
				<meta name="description" content={metaDescription} />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={canonical} />
			</Helmet>

			<div className="services-container">
				<div className="services-header">
					<h1>{title}</h1>
				</div>

				{heroSrc && (
					<div className="service-hero-image">
						<img
							src={heroSrc}
							alt={heroAlt || title}
							loading="lazy"
						/>
					</div>
				)}

				<div className="service-detail-body">
					{/* Overview */}
					{overview && (
						<>
							<h2>Overview</h2>
							<p>{overview}</p>
						</>
					)}

					{/* List sections */}
					{sections?.map((sec, i) => (
						<div key={i}>
							<h2>{sec.heading}</h2>
							{Array.isArray(sec.items) &&
								sec.items.length > 0 && (
									<ul>
										{sec.items.map((it, j) => (
											<li key={j}>{it}</li>
										))}
									</ul>
								)}
						</div>
					))}

					<div className="detail-cta">
						<Link to="/booking" className="book-now-button">
							Book a Home Visit
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicePage;
