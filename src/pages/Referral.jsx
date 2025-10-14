import { Helmet } from 'react-helmet-async';
import '../styles/Referral.css';

const Referral = () => {
	return (
		<div className="referral-container">
			<Helmet>
				<title>Refer a Patient | Stride Podiatry Adelaide</title>
				<meta
					name="description"
					content="Referral information for GPs and coordinators. We accept GPMP/TCA (Medicare CDM), NDIS and aged care referrals for mobile podiatry across Adelaide."
				/>
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://stride-podiatry.com.au/referral/"
				/>
			</Helmet>

			<h1>Refer a Patient</h1>
			<p>
				If you&apos;re a care coordinator, GP or provider, you can refer
				a patient to Stride Podiatry using our secure online form or by
				downloading a PDF copy.
			</p>

			{/* --- Option 1: Online Form --- */}
			<section className="form-section">
				<h2>Option 1: Submit Online</h2>
				<p>
					Complete and submit the secure form below. Your referral
					will be sent directly to Stride Podiatry through our online
					system.
				</p>
				<div className="form-container">
					<iframe
						src="https://stride-podiatry.splose.com/public-form/fcd1208d-e801-454b-a248-4ae9d65fd4dd"
						name="embeddableForm"
						scrolling="auto"
						loading="lazy"
						frameBorder="0"
						title="Stride Podiatry Referral Form"
					></iframe>
				</div>
			</section>

			{/* --- Option 2: PDF Form --- */}
			<section className="form-section">
				<h2>Option 2: Download PDF Form</h2>
				<p>
					If you prefer, you can download and complete our PDF
					referral form instead.
				</p>
				<p>
					📄 <strong>Download:</strong>{' '}
					<a href="/referral-form.pdf" download>
						Stride Podiatry Referral Form (PDF)
					</a>
				</p>
				<p>
					📬 Email completed forms to:{' '}
					<a href="mailto:luke@stride-podiatry.com.au">
						luke@stride-podiatry.com.au
					</a>
				</p>
				<p>
					📞 For queries, call <strong>0468 518 993</strong>
				</p>
			</section>
		</div>
	);
};

export default Referral;
