import ServicePage from './ServicePage';
import hero from '../../assets/images/biomechanicsImg.jpg';

const Biomechanics = () => (
	<ServicePage
		title="Biomechanics & Gait"
		metaTitle="Biomechanics & Gait | Mobile Podiatrist Adelaide | Stride Podiatry"
		metaDescription="Assessment of foot mechanics and gait — load management, strength and orthotic options to reduce pain and improve function."
		canonical="https://stride-podiatry.com.au/services/biomechanics-gait/"
		heroSrc={hero}
		heroAlt="Biomechanics and gait assessment"
		overview="We assess how your feet and legs move during daily life and exercise. Optimising load and mechanics helps reduce pain and prevent recurrence."
		sections={[
			{
				heading: 'Common issues',
				items: [
					'Shin pain or knee tracking discomfort',
					'Recurring foot/ankle aches with walking or running',
					'Fatigue or imbalance from footwear or workload',
				],
			},
			{
				heading: 'How we treat',
				items: [
					'Functional tests and gait analysis',
					'Strength/mobility programming',
					'Custom orthotic prescription when indicated',
				],
			},
			{
				heading: 'When to seek care',
				items: [
					'Ongoing pain with walking/exercise or everyday tasks',
					'Frequent “niggles” or setbacks',
					'Difficulty returning to activity',
				],
			},
		]}
	/>
);

export default Biomechanics;
