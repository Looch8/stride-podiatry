import ServicePage from './ServicePage';
import hero from '../../assets/images/shoewear.jpg';

const FootwearAdvice = () => (
	<ServicePage
		title="Footwear Advice"
		metaTitle="Footwear Advice | Mobile Podiatrist Adelaide | Stride Podiatry"
		metaDescription="Get footwear recommendations matched to your foot shape, support needs and activity — comfort and injury prevention."
		canonical="https://stride-podiatry.com.au/services/footwear-advice/"
		heroSrc={hero}
		heroAlt="Footwear advice"
		overview="The right shoes can dramatically improve comfort and reduce injury risk. We help you choose footwear that suits your feet and activity."
		sections={[
			{
				heading: 'What we consider',
				items: [
					'Foot shape and arch profile',
					'Support and stability needs',
					'Work, daily activity and sport demands',
				],
			},
			{
				heading: 'Outcomes',
				items: [
					'Clear guidance on models to try',
					'Better comfort and support',
					'Lower risk of recurring aches',
				],
			},
		]}
	/>
);

export default FootwearAdvice;
