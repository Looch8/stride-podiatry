import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import profilePic from '../assets/images/profile-pic.webp';

const Home = () => {
	const orgLD = {
		'@context': 'https://schema.org',
		'@type': 'MedicalBusiness',
		name: 'Stride Podiatry',
		url: 'https://stride-podiatry.com.au',
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
				<title>
					Stride Podiatry | Mobile Podiatrist Adelaide — Home Visits
				</title>
				<meta
					name="description"
					content="Expert mobile podiatry across Adelaide. Home visit foot care, ingrown toenails, heel pain, diabetic assessments, orthotics and more. No referral needed—book online."
				/>
				<meta name="robots" content="index, follow" />
				<script type="application/ld+json">
					{JSON.stringify(orgLD)}
				</script>
			</Helmet>

			{/* Hero Section with Background Image */}
			<section className="hero-section">
				<div className="hero-content">
					<h1 className="title">Stride Podiatry</h1>
					<h2 className="subtitle">
						Mobile Podiatrist Adelaide – We Come to You!
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

			{/* Main Content Section */}
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
						<h3>Professional Mobile Podiatry Across Adelaide</h3>
						<p className="highlight-text">
							No referral is necessary to see a podiatrist—
							<strong>book directly with us today!</strong>
						</p>
					</div>

					<div className="service-highlight">
						<p>
							We are a <strong>mobile podiatry service</strong>,
							meaning we treat you in the comfort of your home,
							workplace, or aged care facility. We offer{' '}
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
						<h4>Service Areas</h4>
						<p>
							Stride Podiatry serves{' '}
							<strong>all of the Adelaide metro area</strong>,
							including:
						</p>
						<ul className="location-list">
							<li>
								<strong>Northern Adelaide:</strong> Elizabeth,
								Salisbury, Modbury, Tea Tree Gully
							</li>
							<li>
								<strong>Southern Adelaide:</strong> Noarlunga,
								Marion, Brighton, Glenelg
							</li>
							<li>
								<strong>Eastern Adelaide:</strong> Norwood,
								Burnside, Unley, Glen Osmond
							</li>
							<li>
								<strong>Western Adelaide:</strong> Henley Beach,
								West Lakes, Port Adelaide
							</li>
							<li>
								<strong>Central Adelaide:</strong> Adelaide CBD,
								North Adelaide, Prospect
							</li>
						</ul>
						<p className="contact-note">
							If you're outside these areas, feel free to contact
							us—<em>we may still be able to help.</em>
						</p>
					</div>

					<div className="contact-card">
						<h4>Get in Touch</h4>
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

			{/* Services Preview Section */}
			<section className="services-preview">
				<div className="section-content">
					<h3>Our Mobile Podiatry Services</h3>
					<p>
						We offer comprehensive foot care services including
						general foot care, custom orthotics, foot pain
						treatment, ingrown toenail care, diabetes management,
						biomechanical assessment, and more. Our mobile service
						brings expert podiatry care directly to your home.
					</p>
					<Link to="/services" className="view-all-services">
						View All Services
					</Link>
				</div>
			</section>

			{/* Insurance & Coverage Section */}
			<section className="coverage-section">
				<div className="section-content">
					<h3>We Accept All Major Insurance</h3>
					<p>
						Stride Podiatry accepts all major insurance providers to
						make our services accessible to everyone:
					</p>
					<ul className="insurance-list">
						<li>
							<strong>Medicare</strong> - With a Chronic Disease
							Management Plan (CDM)
						</li>
						<li>
							<strong>NDIS</strong> - For eligible participants
						</li>
						<li>
							<strong>DVA</strong> - For Gold Card holders
						</li>
						<li>
							<strong>Private Health Insurance</strong> - With
							appropriate coverage
						</li>
					</ul>
					<p className="insurance-note">
						No referral is needed for private patients. For
						Medicare, NDIS, or DVA claims, please bring your
						relevant documentation to your appointment.
					</p>
				</div>
			</section>

			{/* FAQ Preview Section */}
			<section className="faq-preview">
				<div className="section-content">
					<h3>Have Questions?</h3>
					<p>
						Visit our <Link to="/faq">FAQ Page</Link> for answers to
						common questions about our services, Medicare, NDIS, and
						more.
					</p>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="cta-section">
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
