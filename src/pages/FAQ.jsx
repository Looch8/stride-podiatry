import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/FAQ.css';

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const toggleFAQ = (index) =>
		setOpenIndex(openIndex === index ? null : index);

	const faqData = useMemo(
		() => [
			{
				question: 'Do I need a referral to see a podiatrist?',
				answer: "No, you don't need a referral to book with Stride Podiatry. We accept private bookings, Medicare CDM plans, NDIS and DVA clients.",
			},
			{
				question: 'Do you accept Medicare, NDIS, and DVA clients?',
				answer: 'Yes—Medicare CDM (with GP referral), DVA Gold Card holders, and NDIS (where eligible).',
			},
			{
				question: 'Where do you provide mobile podiatry services?',
				answer: 'Across the Adelaide metro area. If you’re outside this region, contact us to discuss options.',
			},
			{
				question: 'What conditions do you treat?',
				answer: 'Foot pain, general footcare, ingrown toenails, diabetic foot care, corns, calluses, plantar fasciitis, footwear assessments and more.',
			},
			{
				question: 'How do I book an appointment?',
				answer: 'Call us, email us, or use our online booking form.',
			},
			{
				question: 'What should I expect during a home visit?',
				answer: 'Assessment, treatment as needed, and advice on footwear and mobility to keep your feet healthy.',
			},
		],
		[]
	);

	const faqLD = useMemo(
		() => ({
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faqData.map((item) => ({
				'@type': 'Question',
				name: item.question,
				acceptedAnswer: { '@type': 'Answer', text: item.answer },
			})),
		}),
		[faqData]
	);

	return (
		<section className="faq">
			<Helmet>
				<title>Podiatry FAQs | Stride Podiatry Adelaide</title>
				<meta
					name="description"
					content="Answers to common questions about mobile podiatry in Adelaide: Medicare CDM, NDIS, DVA, service areas, conditions treated, and what to expect."
				/>
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://stride-podiatry.com.au/faq/"
				/>
				<script type="application/ld+json">
					{JSON.stringify(faqLD)}
				</script>
			</Helmet>

			<div className="faq-container">
				<div className="faq-header">
					<h1>Frequently Asked Questions</h1>
					<p className="faq-intro">
						Find answers about our mobile podiatry services,
						bookings and treatments.
					</p>
				</div>

				<div className="faq-list">
					{faqData.map((item, index) => (
						<div
							key={index}
							className={`faq-item ${
								openIndex === index ? 'open' : ''
							}`}
							onClick={() => toggleFAQ(index)}
						>
							<div className="faq-item-header">
								<h2 className="faq-question">
									{item.question}
								</h2>
								<span className="faq-icon">
									{openIndex === index ? '−' : '+'}
								</span>
							</div>
							<div
								className={`faq-answer-container ${
									openIndex === index ? 'open' : ''
								}`}
							>
								<p className="faq-answer">{item.answer}</p>
							</div>
						</div>
					))}
				</div>

				<div className="faq-contact">
					<p>Still have questions?</p>
					<p>Contact us for more information about our services.</p>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
