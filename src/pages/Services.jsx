import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Services.css';

import generalCareImg from '../assets/images/general-foot-care.jpg';
import ingrownNailImg from '../assets/images/ingrown-nail.jpg';
import diabetesCareImg from '../assets/images/diabetesCare2.png';
import biomechanicsImg from '../assets/images/biomechanicsImg.jpg';
import footPainImg from '../assets/images/foot-pain.jpg';
import shoewearImg from '../assets/images/shoewear.jpg';
import orthoticsImg from '../assets/images/orthoticsImg.jpg';
import sportsPodiatryImg from '../assets/images/sportsPodiatryImg.jpeg';

const serviceData = [
	{
		id: 'general-care',
		title: 'General Podiatry Care',
		image: generalCareImg,
		description:
			'Expert care for nails, corns and calluses to keep your feet healthy and comfortable.',
		details:
			'Common conditions: thickened nails, corns, calluses and cracked heels. Treatments include debridement, padding and footwear advice.',
	},
	{
		id: 'ingrown-toenails',
		title: 'Ingrown Toenail Treatment',
		image: ingrownNailImg,
		description:
			'Specialised care for painful or infected ingrown toenails for quick relief and recovery.',
		details:
			'Conservative care, nail bracing and minor procedures under local anaesthetic when suitable.',
	},
	{
		id: 'diabetic-assessments',
		title: 'Diabetes Foot Care',
		image: diabetesCareImg,
		description:
			'Comprehensive assessments and care to prevent complications and maintain foot health.',
		details:
			'Neurological & vascular screening, ulcer prevention, routine nail/skin care and education.',
	},
	{
		id: 'biomechanics',
		title: 'Biomechanics & Gait Assessment',
		image: biomechanicsImg,
		description:
			'Analyse foot function and movement to address imbalances and improve mobility.',
		details:
			'Gait assessment, orthotics and strengthening to prevent pain and injury.',
	},
	{
		id: 'orthotics',
		title: 'Custom Orthotics',
		image: orthoticsImg,
		description:
			'Personalised devices to support your feet, correct mechanics and relieve pain.',
		details:
			'Custom-made from detailed assessment, foot shape and activity needs.',
	},
	{
		id: 'heel-pain',
		title: 'Heel & Arch Pain',
		image: footPainImg,
		description:
			'Diagnosis and treatment to help you get back on your feet.',
		details:
			'Plantar fasciitis, heel spurs, Achilles tendinopathy — managed with loading plans, orthotics and footwear.',
	},
	{
		id: 'footwear',
		title: 'Footwear Advice',
		image: shoewearImg,
		description:
			'Recommendations to ensure your footwear supports your lifestyle and foot health.',
		details:
			'Fit and function assessment, arch support needs, and activity-specific guidance.',
	},
	{
		id: 'sports-podiatry',
		title: 'Sports Podiatry',
		image: sportsPodiatryImg,
		description:
			'Care for athletes and active people to prevent and treat foot/ankle issues.',
		details:
			'Sport-specific assessments, injury prevention and treatment plans.',
	},
];

const Services = () => {
	const [selectedService, setSelectedService] = useState(null);

	useEffect(() => {
		if (!selectedService) return;
		const scrollY = window.scrollY;
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.left = '0';
		document.body.style.right = '0';
		document.body.style.width = '100%';
		const onKeyDown = (e) => {
			if (e.key === 'Escape') setSelectedService(null);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => {
			const top = document.body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = '';
			document.body.style.right = '';
			document.body.style.width = '';
			window.scrollTo(0, Math.abs(parseInt(top || '0', 10)));
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [selectedService]);

	const openModal = (service) => setSelectedService(service);
	const closeModal = () => setSelectedService(null);

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
					{serviceData.map((service) => (
						<article
							key={service.id}
							id={service.id}
							className="service-card"
							onClick={() => openModal(service)}
						>
							<h2>{service.title}</h2>
							<p>{service.description}</p>
							<div className="service-image">
								<img
									src={service.image}
									alt={service.title}
									loading="lazy"
								/>
							</div>
						</article>
					))}
				</div>

				{selectedService && (
					<div
						className="sp-modal-overlay"
						onClick={closeModal}
						role="dialog"
						aria-modal="true"
					>
						<div
							className="sp-modal"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="sp-modal-header">
								<h2 className="sp-modal-title">
									{selectedService.title}
								</h2>
								<button
									type="button"
									className="sp-close-btn"
									onClick={closeModal}
									aria-label="Close"
								>
									&times;
								</button>
							</div>
							<div className="sp-modal-body">
								<div className="sp-modal-image">
									<img
										src={selectedService.image}
										alt={selectedService.title}
										loading="lazy"
									/>
								</div>
								<p className="sp-modal-description">
									{selectedService.description}
								</p>
								<p className="sp-modal-details">
									{selectedService.details}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Services;
