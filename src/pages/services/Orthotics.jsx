import ServicePage from './ServicePage';
import hero from '../../assets/images/orthoticsImg.jpg';

const Orthotics = () => (
	<ServicePage
		title="Custom Orthotics"
		metaTitle="Custom Orthotics | Mobile Podiatrist Adelaide | Stride Podiatry"
		metaDescription="Custom orthotics prescribed from detailed assessment to support foot mechanics, reduce pain and improve comfort."
		canonical="https://stride-podiatry.com.au/services/custom-orthotics/"
		heroSrc={hero}
		heroAlt="Custom foot orthotics"
		overview="Orthotics can support your feet, optimise mechanics and reduce pain when prescribed from a thorough biomechanical assessment."
		sections={[
			{
				heading: 'Common reasons for orthotics',
				items: [
					'Chronic heel or arch pain',
					'Ankle, knee, or hip pain',
					'Recurrent overuse injuries',
					'Work or sport demands needing extra support',
				],
			},
			{
				heading: 'What we do',
				items: [
					'Detailed lower limb assessment',
					'Orthotic design and prescription tailored to your individual needs',
					'Fit checks and adjustment plan',
				],
			},
			{
				heading: 'When to seek care',
				items: [
					'Persistent pain despite footwear changes',
					'Recurrent injuries with activity',
					'Fatigue or soreness with standing/walking',
				],
			},
		]}
	/>
);

export default Orthotics;
