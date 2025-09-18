import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import profilePic from '../assets/images/profile-pic.webp';

const Home = () => {
	const orgLD = {
		'@context': 'https://schema.org',
		'@type': 'MedicalBusiness',
		name: 'Stride Podiatry',
		url: 'https://stride-podiatry.com.au/',
		telephone: '+61468518993',
		email: 'luke@stride-podiatry.com.au',
		image: 'https://stride-podiatry.com.au/assets/images/Stride_logo.jpg',
		areaServed: [
			'Adelaide Metro',
			'Northern Adelaide',
			'Southern Adelaide',
			'Eastern Adelaide',
			'Western Adelaide',
			'Adelaide CBD',
		],
		priceRange: '$$',
		sameAs: [
			'https://www.facebook.com/profile.php?id=61570588927493',
			'https://www.instagram.com/stride.podiatry/',
		],
	};

	return (
		<main className="main-content">
			<Helmet>
				<title>Mobile Podiatrist Adelaide | Stride Podiatry</title>
				<meta
					name="description"
					content="Expert mobile podiatry across Adelaide. Home-visit foot care, ingrown toenails, heel pain, diabetic assessments, orthotics and more. No referral needed—book online."
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://stride-podiatry.com.au/" />
				<script type="application/ld+json">
					{JSON.stringify(orgLD)}
				</script>
			</Helmet>

			{/* Hero */}
			<section className="hero-section">
				<div className="hero-content">
					<h1 className="title">Mobile Podiatrist in Adelaide</h1>
					<h2 className="subtitle">
						Stride Podiatry — We Come to You
					</h2>
					<Link
						to="/booking"
						className="hero-cta-button"
						aria-label="Book a home visit with Stride Podiatry"
					>
						Book Your Home Visit
					</Link>
				</div>
			</section>

			{/* Main Content */}
			<section className="home-container">
				<div className="profile-image">
					<img
						src={profilePic}
						alt="Luke Wheldale — Mobile Podiatrist in Adelaide"
						loading="lazy"
						width="350"
						height="420"
					/>
				</div>

				<div className="home-text">
					<div className="welcome-card">
						<h2>Professional Mobile Podiatry Across Adelaide</h2>
						<p className="highlight-text">
							No referral is necessary to see a podiatrist—
							<strong>book directly with us today!</strong>
						</p>
					</div>

					<div className="service-highlight">
						<p>
							We are a <strong>mobile podiatry service</strong>,
							treating you at home, work, or in aged care
							facilities. We offer{' '}
							<Link to="/services#ingrown-toenails">
								ingrown toenail care
							</Link>
							,{' '}
							<Link to="/services#heel-pain">
								heel pain treatment
							</Link>
							,{' '}
							<Link to="/services#diabetic-assessments">
								diabetic foot assessments
							</Link>
							,{' '}
							<Link to="/services#orthotics">
								custom orthotics
							</Link>
							, and more.
						</p>
					</div>

					<div className="location-card">
						<h3>Service Areas</h3>
						<p>
							<strong>
								We cover ALL of Adelaide Metro including:
							</strong>
						</p>

						<ul className="location-list">
							<li>
								<strong>Northern Adelaide:</strong> Elizabeth,
								Salisbury, Modbury, Tea Tree Gully, Golden
								Grove, Mawson Lakes, Parafield Gardens, Gawler,
								Pooraka, Para Hills
							</li>
							<li>
								<strong>Southern Adelaide:</strong> Noarlunga,
								Marion, Brighton, Glenelg, Hallett Cove,
								Morphett Vale, Reynella, Seaford, Christies
								Beach, Aldinga
							</li>
							<li>
								<strong>Eastern Adelaide:</strong> Norwood,
								Burnside, Unley, Glen Osmond, Magill,
								Kensington, Payneham, Campbelltown, Rostrevor,
								Athelstone
							</li>
							<li>
								<strong>Western Adelaide:</strong> Henley Beach,
								West Lakes, Port Adelaide, Seaton, Findon,
								Woodville, Grange, Fulham, Semaphore, Largs Bay
							</li>
							<li>
								<strong>Central Adelaide:</strong> Adelaide CBD,
								North Adelaide, Prospect, Walkerville, Kent
								Town, Mile End, Bowden, Thebarton, Goodwood,
								Parkside
							</li>
						</ul>

						<p className="contact-note">
							Outside Adelaide Metro?{' '}
							<em>Contact us — we may still be able to help.</em>
						</p>
					</div>

					<div className="contact-card">
						<h3>Get in Touch</h3>
						<div className="contact-info">
							<p>
								📞 <strong>Phone:</strong>{' '}
								<a href="tel:+61468518993">0468 518 993</a>
							</p>
							<p>
								📧 <strong>Email:</strong>{' '}
								<a href="mailto:luke@stride-podiatry.com.au">
									luke@stride-podiatry.com.au
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Preview */}
			<section className="services-preview">
				<div className="section-content">
					<h2>Our Mobile Podiatry Services</h2>
					<p>
						General foot care, custom orthotics, foot pain
						treatment, ingrown toenail care, diabetes management,
						biomechanical assessment and more — delivered at your
						home.
					</p>
					<Link to="/services" className="view-all-services">
						View All Services
					</Link>
				</div>
			</section>

			{/* Insurance */}
			<section className="coverage-section">
				<div className="section-content">
					<h2>We Accept All Major Insurance</h2>
					<ul className="insurance-list">
						<li>
							<strong>Medicare</strong> — Chronic Disease
							Management (CDM)
						</li>
						<li>
							<strong>NDIS</strong> — eligible participants
						</li>
						<li>
							<strong>DVA</strong> — Gold Card holders
						</li>
						<li>
							<strong>Private Health Insurance</strong>
						</li>
					</ul>
					<p className="insurance-note">
						No referral needed for private patients. Bring any
						documentation for Medicare, NDIS or DVA claims.
					</p>
				</div>
			</section>

			{/* FAQ Preview */}
			<section className="faq-preview">
				<div className="section-content">
					<h2>Have Questions?</h2>
					<p>
						Visit our <Link to="/faq">FAQ Page</Link> for answers
						about services, Medicare, NDIS and more.
					</p>
				</div>
			</section>

			{/* CTA */}
			<section className="cta-section">
				<div className="book-now">
					<h2>Ready to Take the First Step?</h2>
					<p>
						Book your <strong>home-visit appointment</strong> today
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
