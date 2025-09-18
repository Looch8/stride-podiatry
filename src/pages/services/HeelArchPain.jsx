import ServicePage from './ServicePage';
import hero from '../../assets/images/foot-pain.jpg';

const HeelArchPain = () => (
	<ServicePage
		title="Heel & Arch Pain"
		metaTitle="Heel & Arch Pain | Mobile Podiatrist Adelaide | Stride Podiatry"
		metaDescription="Diagnosis and treatment for heel and arch pain — plantar fasciitis, heel spurs and Achilles issues managed at home."
		canonical="https://stride-podiatry.com.au/services/heel-arch-pain/"
		heroSrc={hero}
		heroAlt="Heel and arch pain treatment"
		overview="We diagnose and treat heel and arch pain so you can move comfortably again."
		sections={[
			{
				heading: 'Common conditions',
				items: [
					'Plantar fasciitis and heel spurs',
					'Achilles tendinopathy',
					'Overuse or load-related arch pain',
				],
			},
			{
				heading: 'How we treat',
				items: [
					'Loading and activity plans',
					'Footwear and orthotic options',
					'Mobility and strengthening exercises',
				],
			},
			{
				heading: 'When to seek care',
				items: [
					'Morning pain or first-step pain',
					'Worsening symptoms over weeks',
					'Pain impacting work or sport',
				],
			},
		]}
	/>
);

export default HeelArchPain;
