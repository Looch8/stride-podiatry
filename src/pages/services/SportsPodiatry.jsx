import ServicePage from './ServicePage';
import hero from '../../assets/images/sportsPodiatryImg.jpeg';

const SportsPodiatry = () => (
	<ServicePage
		title="Sports Podiatry"
		metaTitle="Sports Podiatry | Mobile Podiatrist Adelaide | Stride Podiatry"
		metaDescription="Sport-specific assessments, injury prevention and treatment plans for active people — delivered at home."
		canonical="https://stride-podiatry.com.au/services/sports-podiatry/"
		heroSrc={hero}
		heroAlt="Sports podiatry"
		overview="We help active people stay active — assessing mechanics, managing load and building resilience for your sport."
		sections={[
			{
				heading: 'Common issues',
				items: [
					'Shin splints, plantar fasciitis, Achilles pain',
					'Forefoot or ankle overload',
					'Recurrent pain with training',
				],
			},
			{
				heading: 'How we treat',
				items: [
					'Sport-specific assessment and gait review',
					'Progressive loading & strength programs',
					'Footwear and orthotic options as needed',
				],
			},
			{
				heading: 'When to seek care',
				items: [
					'Pain that returns with training',
					'Setbacks increasing in frequency',
					'Unsure how to progress safely',
				],
			},
		]}
	/>
);

export default SportsPodiatry;
