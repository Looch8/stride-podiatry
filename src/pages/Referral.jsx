import { Helmet } from 'react-helmet-async';
import '../styles/Referral.css';

const Referral = () => {
	return (
		<div className="referral-container">
			<Helmet>
				<title>
					Referrals | GPMP/TCA, NDIS & Aged Care | Stride Podiatry
					Adelaide
				</title>
				<meta
					name="description"
					content="Referral information for GPs and coordinators. We accept GPMP/TCA (Medicare CDM), NDIS and aged care referrals for mobile podiatry across Adelaide."
				/>
				<meta name="robots" content="index, follow" />
			</Helmet>

			<h1>Refer a Patient</h1>
			<p>
				If you're a care coordinator, GP, or support provider, you can
				refer a patient to Stride Podiatry using the form below.
			</p>
			<p>
				📄 <strong>Download:</strong>{' '}
				<a href="/referral-form.pdf" download>
					Stride Podiatry Referral Form (PDF)
				</a>
			</p>

			<p>
				📬 Once completed, please email it to:{' '}
				<a href="mailto:luke@stride-podiatry.com.au">
					luke@stride-podiatry.com.au
				</a>
			</p>
			<p>
				📞 For any queries, feel free to call{' '}
				<strong>0468 518 993</strong>
			</p>
		</div>
	);
};

export default Referral;
