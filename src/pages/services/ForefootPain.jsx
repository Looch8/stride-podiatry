import ServicePage from './ServicePage';
// not strictly needed here, ServicePage handles it
// Use a real image if you have one:
import forefootPainImg from '../../assets/images/bunion.jpg'; // fallback: reuse footPain image

const ForefootPain = () => {
	return (
		<ServicePage
			title="Forefoot Pain"
			metaTitle="Forefoot Pain | Bunions, Morton’s Neuroma, Hammer Toes | Stride Podiatry"
			metaDescription="Assessment and home-visit treatment for forefoot pain including bunions, Morton’s neuroma and hammer toes. Mobile podiatry across Adelaide."
			canonical="https://stride-podiatry.com.au/services/forefoot-pain"
			heroSrc={forefootPainImg}
			heroAlt="Forefoot pain assessment and treatment"
			overview="Forefoot pain can stem from joint irritation, nerve compression or altered toe mechanics. We identify the drivers—load, footwear and gait—and create a plan to reduce pain and keep you active."
			sections={[
				{
					heading: 'Common conditions',
					items: [
						'Bunions (hallux valgus)',
						'Morton’s neuroma / interdigital nerve irritation',
						'Hammer toes / claw toes',
						'Capsulitis or synovitis of the lesser toe joints',
						'Metatarsalgia (ball-of-foot pain)',
						'Sesamoiditis (big toe joint)',
					],
				},
				{
					heading: 'How we treat',
					items: [
						'Detailed assessment of gait, load and footwear',
						'Pressure offloading and padding for sensitive areas',
						'Toe props, spacers and taping to improve alignment',
						'Strength & mobility exercises for forefoot stability',
						'Footwear updates (wider toe box, forefoot rocker if needed)',
						'Custom or prefabricated orthotics when indicated',
					],
				},
				{
					heading: 'When to seek care',
					items: [
						'Pain during walking, standing or push-off',
						'Burning or tingling between toes / under the forefoot',
						'Visible toe deviation, rubbing, or recurrent corns/callus',
					],
				},
			]}
		/>
	);
};

export default ForefootPain;
