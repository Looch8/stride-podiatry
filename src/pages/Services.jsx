import { useState } from 'react';
import '../styles/Services.css';

// Import images for each service
import generalCareImg from '../assets/images/general-foot-care.jpg';
import ingrownNailImg from '../assets/images/ingrown-nail.jpg';
import diabetesCareImg from '../assets/images/diabetesCare.jpg';
import biomechanicsImg from '../assets/images/biomechanicsImg.jpg';
import footPainImg from '../assets/images/foot-pain.jpg';
import shoewearImg from '../assets/images/shoewear.jpg';
import orthoticsImg from '../assets/images/orthoticsImg.jpg';
import sportsPodiatryImg from '../assets/images/sportsPodiatryImg.jpeg';

const serviceData = [
	{
		title: 'General Podiatry Care',
		image: generalCareImg,
		description:
			'We provide expert care for nails, corns, and calluses to keep your feet healthy and comfortable.',
		details:
			'Common conditions treated: thickened nails, corns, calluses, and cracked heels. Treatment includes debridement, padding, and footwear advice.',
	},
	{
		title: 'Ingrown Toenail Care',
		image: ingrownNailImg,
		description:
			'Specialised treatment for painful and infected ingrown toenails, ensuring quick relief and recovery.',
		details:
			'Common treatments include conservative nail care, nail bracing, and minor surgical procedures under local anesthesia.',
	},
	{
		title: 'Diabetes Care',
		image: diabetesCareImg,
		description:
			'Comprehensive foot assessments and care for people with diabetes to prevent complications and maintain foot health.',
		details:
			'Includes neurological & vascular assessments, prevention of diabetic foot ulcers, and routine nail/skin care.',
	},
	{
		title: 'Biomechanics',
		image: biomechanicsImg,
		description:
			'Analysis of foot function and movement to address imbalances and improve overall mobility.',
		details:
			'Treatment involves gait assessments, orthotics, and strengthening exercises to prevent pain and injury.',
	},
	{
		title: 'Custom Orthotics',
		image: orthoticsImg,
		description:
			'Personalised orthotic devices designed to support your feet, correct biomechanical issues, and relieve pain.',
		details:
			'Custom-made orthotics based on detailed biomechanical assessment, foot shape, and your specific needs. Suitable for various conditions including flat feet, high arches, and sports-related issues.',
	},
	{
		title: 'Foot Pain',
		image: footPainImg,
		description:
			'Diagnosis and treatment of various causes of foot pain to help you get back on your feet pain-free.',
		details:
			'Conditions treated include plantar fasciitis, heel spurs, and Achilles tendinitis using pain management, orthotics, and rehabilitation plans.',
	},
	{
		title: 'Shoewear Advice',
		image: shoewearImg,
		description:
			'Personalised recommendations to ensure your footwear supports your lifestyle and foot health.',
		details:
			'Assessing foot shape, arch support, and gait pattern to recommend appropriate footwear for comfort and injury prevention.',
	},
	{
		title: 'Sports Podiatry',
		image: sportsPodiatryImg,
		description:
			'Specialised care for athletes and sports enthusiasts to prevent and treat sports-related foot conditions.',
		details:
			'Includes sports-specific assessments, injury prevention strategies, and treatment for common sports-related foot and lower limb conditions.',
	},
];

const Services = () => {
	const [selectedService, setSelectedService] = useState(null);

	const openModal = (service) => {
		setSelectedService(service);
	};

	const closeModal = () => {
		setSelectedService(null);
	};

	return (
		<section className="services">
			<h2>Our Services</h2>
			<ul className="services-list">
				{serviceData.map((service, index) => (
					<li key={index} onClick={() => openModal(service)}>
						<h3>{service.title}</h3>
						<p>{service.description}</p>
					</li>
				))}
			</ul>

			{/* Popup Modal */}
			{selectedService && (
				<div className="modal-overlay" onClick={closeModal}>
					<div
						className="modal-content"
						onClick={(e) => e.stopPropagation()}
					>
						<span className="close-btn" onClick={closeModal}>
							&times;
						</span>
						<img
							src={selectedService.image}
							alt={selectedService.title}
						/>
						<h3>{selectedService.title}</h3>
						<p>{selectedService.details}</p>
					</div>
				</div>
			)}
		</section>
	);
};

export default Services;
