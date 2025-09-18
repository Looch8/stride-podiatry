import ServicePage from './ServicePage';
import hero from '../../assets/images/diabetesCare2.png';

const DiabetesCare = () => (
	<ServicePage
		title="Diabetes Foot Care"
		metaTitle="Diabetes Foot Care | Mobile Podiatrist Adelaide | Stride Podiatry"
		metaDescription="Diabetes foot assessments at home — neurological & vascular screening, risk reduction and education to prevent ulcers."
		canonical="https://stride-podiatry.com.au/services/diabetes-foot-care/"
		heroSrc={hero}
		heroAlt="Diabetes foot assessment"
		overview="Diabetes can affect circulation and sensation. Regular podiatry helps detect issues early and lower the risk of ulcers and infection."
		sections={[
			{
				heading: 'Assessment includes',
				items: [
					'Neurological & vascular screening',
					'Footwear and risk evaluation',
					'Skin/nail care and education',
				],
			},
			{
				heading: 'How we treat',
				items: [
					'Regular care to lower risk',
					'Pressure offloading and footwear updates',
					'Care plans and education tailored to you',
				],
			},
			{
				heading: 'When to seek care',
				items: [
					'New wounds or skin breakdown',
					'Colour or temperature changes',
					'Swelling or pain with diabetes',
					'Newly diagnosed diabetics',
				],
			},
		]}
	/>
);

export default DiabetesCare;
