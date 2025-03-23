import { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const faqData = [
		{
			question: 'Do I need a referral to see a podiatrist?',
			answer: `No, you don't need a referral to book an appointment with Stride Podiatry. We accept private bookings, Medicare (CDM plans), NDIS, and DVA clients.`,
		},
		{
			question: 'Do you accept Medicare, NDIS, and DVA clients?',
			answer: 'Yes! We accept Medicare CDM plans (with GP referral), DVA Gold Card holders, and NDIS funding for eligible participants.',
		},
		{
			question: 'Where do you provide mobile podiatry services?',
			answer: 'Stride Podiatry serves all of the Adelaide metro area. If you are outside this region, contact us to discuss your options.',
		},
		{
			question: 'What conditions do you treat?',
			answer: 'We specialize in treating foot pain, general footcare, ingrown toenails, diabetic foot care, corns, calluses, plantar fasciitis, and footwear assessments.',
		},
		{
			question: 'How do I book an appointment?',
			answer: 'You can book an appointment by calling us, emailing, or using our online booking or contact form.',
		},
		{
			question: 'What should I expect during a home visit?',
			answer: 'During a home visit, our podiatrist will assess your feet, provide treatment as needed, and offer footwear or mobility advice to keep your feet healthy.',
		},
	];

	return (
		<section className="faq">
			<div className="faq-container">
				<div className="faq-header">
					<h1>Frequently Asked Questions</h1>
					<p className="faq-intro">
						Find answers to common questions about our mobile
						podiatry services, bookings, and treatments.
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
