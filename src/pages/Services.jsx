import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

import generalCareImg from '../assets/images/general-foot-care.jpg';
import ingrownNailImg from '../assets/images/ingrown-nail.jpg';
import diabetesCareImg from '../assets/images/diabetesCare2.png';
import biomechanicsImg from '../assets/images/biomechanicsImg.jpg';
import footPainImg from '../assets/images/foot-pain.jpg';
import shoewearImg from '../assets/images/shoewear.jpg';
import orthoticsImg from '../assets/images/orthoticsImg.jpg';
import sportsPodiatryImg from '../assets/images/sportsPodiatryImg.jpeg';
import forefootImg from '../assets/images/bunion.jpg';

const serviceData = [
	{
		id: 'general-podiatry',
		title: 'General Podiatry Care',
		image: generalCareImg,
		to: '/services/general-podiatry',
		description:
			'Nails, corns and calluses — keep your feet healthy and comfortable.',
	},

	{
		id: 'ingrown-toenail',
		title: 'Ingrown Toenail Treatment',
		image: ingrownNailImg,
		to: '/services/ingrown-toenail',
		description: 'Relief for painful or infected ingrown toenails.',
	},

	{
		id: 'diabetes-foot-care',
		title: 'Diabetes Foot Care',
		image: diabetesCareImg,
		to: '/services/diabetes-foot-care',
		description: 'Assessments and care to prevent complications.',
	},

	{
		id: 'biomechanics-gait',
		title: 'Biomechanics & Gait',
		image: biomechanicsImg,
		to: '/services/biomechanics-gait',
		description: 'Analyse movement and address imbalances.',
	},

	{
		id: 'custom-orthotics',
		title: 'Custom Orthotics',
		image: orthoticsImg,
		to: '/services/custom-orthotics',
		description: 'Personalised devices to support and relieve pain.',
	},

	{
		id: 'heel-arch-pain',
		title: 'Heel & Arch Pain',
		image: footPainImg,
		to: '/services/heel-arch-pain',
		description: 'Diagnosis and treatment plans that get you moving.',
	},

	{
		id: 'footwear-advice',
		title: 'Footwear Advice',
		image: shoewearImg,
		to: '/services/footwear-advice',
		description: 'Shoes that fit your feet and your life.',
	},

	{
		id: 'sports-podiatry',
		title: 'Sports Podiatry',
		image: sportsPodiatryImg,
		to: '/services/sports-podiatry',
		description: 'Prevent and treat sport-related foot/ankle issues.',
	},

	{
		id: 'forefoot-pain',
		title: 'Forefoot Pain',
		image: forefootImg,
		to: '/services/forefoot-pain',
		description: 'Bunions, Morton’s neuroma, hammertoes and more.',
	},
];

const Services = () => {
	return (
		<section className="services">
			<Helmet>
				<title>Podiatry Services in Adelaide | Home Visits</title>
				<meta
					name="description"
					content="Mobile podiatry in Adelaide: general foot & nail care, heel and arch pain, ingrown toenails, diabetes assessments, biomechanics, custom orthotics, footwear advice and sports podiatry."
				/>
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://stride-podiatry.com.au/services/"
				/>
			</Helmet>

			<div className="services-container">
				<div className="services-header">
					<h1>Our Podiatry Services</h1>
					<p>
						Comprehensive foot care solutions tailored to you.
						Select a service to learn more.
					</p>
				</div>

				<div className="services-grid">
					{serviceData.map((s) => (
						<Link
							to={s.to}
							key={s.id}
							className="service-card"
							aria-label={`${s.title} details`}
						>
							<h2>{s.title}</h2>
							<p>{s.description}</p>
							<div className="service-image">
								<img
									src={s.image}
									alt={s.title}
									loading="lazy"
								/>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
