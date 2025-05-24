import '../styles/Referral.css';

const Referral = () => {
	return (
		<div className="referral-container">
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
