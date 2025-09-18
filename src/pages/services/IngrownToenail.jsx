import ServicePage from './ServicePage';
import hero from '../../assets/images/ingrown-nail.jpg';

const IngrownToenail = () => (
	<ServicePage
		title="Ingrown Toenail Treatment"
		metaTitle="Ingrown Toenail Treatment | Mobile Podiatrist Adelaide | Stride Podiatry"
		metaDescription="Fast, effective relief for ingrown toenails — conservative care, bracing and minor procedures when indicated."
		canonical="https://stride-podiatry.com.au/services/ingrown-toenail/"
		heroSrc={hero}
		heroAlt="Ingrown toenail care"
		overview="We treat painful or infected ingrown nails to relieve pain quickly and help prevent recurrence."
		sections={[
			{
				heading: 'Common issues',
				items: [
					'Pain and redness along the nail edge',
					'Swelling or infection',
					'Recurrent ingrown toenails',
				],
			},
			{
				heading: 'How we treat',
				items: [
					'Conservative nail edge clearing',
					'Minor procedures under local anaesthetic if indicated',
					'Tailored advice to reduce recurrence',
				],
			},
			{
				heading: 'When to seek care',
				items: [
					'Increasing pain or swelling',
					'Pus or signs of infection',
					'Recurrent ingrown nails affecting daily life',
				],
			},
		]}
	/>
);

export default IngrownToenail;
