import ServicePage from './ServicePage';
import hero from '../../assets/images/general-foot-care.jpg';

const GeneralPodiatry = () => (
	<ServicePage
		title="General Podiatry Care"
		metaTitle="General Podiatry Care | Mobile Podiatrist Adelaide | Stride Podiatry"
		metaDescription="General foot & nail care at home across Adelaide — nails, corns, calluses and cracked heels. Comfortable, convenient podiatry care."
		canonical="https://stride-podiatry.com.au/services/general-podiatry/"
		heroSrc={hero}
		heroAlt="General podiatry care at home"
		overview="We keep nails, corns and calluses under control so your feet stay healthy and comfortable."
		sections={[
			{
				heading: 'Common issues',
				items: [
					'Thickened or painful nails',
					'Corns and calluses',
					'Cracked heels, dry skin',
				],
			},
			{
				heading: 'How we treat',
				items: [
					'Gentle nail reduction and debridement',
					'Safe removal of corns/callus',
					'Moisturising & footwear advice to prevent recurrence',
				],
			},
			{
				heading: 'When to seek care',
				items: [
					'Painful buildup of skin or nails',
					'Skin splitting or pressure areas',
					'Discomfort walking or standing',
				],
			},
		]}
	/>
);

export default GeneralPodiatry;
