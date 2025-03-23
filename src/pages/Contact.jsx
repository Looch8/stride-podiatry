import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState({ type: '', text: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setMessage({ type: '', text: '' }); // Clear any existing messages
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setMessage({ type: '', text: '' });

		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			message: formData.message,
		};

		try {
			await emailjs.send(
				window.env.VITE_EMAILJS_SERVICE_ID,
				window.env.VITE_EMAILJS_TEMPLATE_ID,
				templateParams,
				window.env.VITE_EMAILJS_PUBLIC_KEY
			);

			setMessage({
				type: 'success',
				text: "Your message has been sent successfully! We'll get back to you soon.",
			});

			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			console.error('Error sending email:', error);
			setMessage({
				type: 'error',
				text: 'Failed to send your message. Please try again later or contact us directly.',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section className="contact">
			<div className="contact-container">
				<div className="contact-header">
					<h2>Contact Stride Podiatry</h2>
					<p>
						Have a question? Need more information? We&apos;re here
						to help! Get in touch with us through any of the
						following channels.
					</p>
				</div>

				<div className="contact-grid">
					<div className="contact-info">
						<h3>Get in Touch</h3>
						<ul>
							<li>
								<div className="contact-item">
									<span className="icon">📞</span>
									<div className="contact-details">
										<strong>Call us</strong>
										<a href="tel:+61468518993">
											0468 518 993
										</a>
									</div>
								</div>
							</li>
							<li>
								<div className="contact-item">
									<span className="icon">📧</span>
									<div className="contact-details">
										<strong>Email us</strong>
										<a href="mailto:stridepodiatry@outlook.com.au">
											stridepodiatry@outlook.com.au
										</a>
									</div>
								</div>
							</li>
							<li>
								<div className="contact-item">
									<span className="icon">📱</span>
									<div className="contact-details">
										<strong>Follow us</strong>
										<div className="social-links">
											<a
												href="https://www.facebook.com/profile.php?id=61570588927493"
												target="_blank"
												rel="noopener noreferrer"
												className="social-link"
											>
												Facebook
											</a>
											<a
												href="https://www.instagram.com/stride.podiatry/?hl=en"
												target="_blank"
												rel="noopener noreferrer"
												className="social-link"
											>
												Instagram
											</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div className="contact-form-container">
						<h3>Send us a Message</h3>
						<form className="contact-form" onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="name">Your Name</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Enter your name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Your Email</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Enter your email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Your Message</label>
								<textarea
									id="message"
									name="message"
									placeholder="How can we help you?"
									rows="5"
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</div>
							<button
								type="submit"
								className={`submit-button ${
									isLoading ? 'loading' : ''
								}`}
								disabled={isLoading}
							>
								{isLoading ? 'Sending...' : 'Send Message'}
							</button>
						</form>
					</div>
				</div>

				{message.type && (
					<div className={`message ${message.type}-message`}>
						{message.text}
					</div>
				)}
			</div>
		</section>
	);
};

export default Contact;
