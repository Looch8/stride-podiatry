import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Map formData to match the EmailJS template variables
		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			message: formData.message,
		};

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				templateParams,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					alert('Your message has been sent!');
					setFormData({ name: '', email: '', message: '' });
				},
				(error) => {
					console.error('Error sending email:', error);
					alert(
						'Failed to send your message. Please try again later.'
					);
				}
			);
	};

	return (
		<section className="contact">
			<h2>Contact Us</h2>

			<form className="contact-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					rows="5"
					value={formData.message}
					onChange={handleChange}
					required
				/>
				<button type="submit">Send Message</button>
			</form>

			<div className="contact-info">
				<p>Or reach us directly:</p>
				<ul>
					<li>
						<strong>Email:</strong> your-email@example.com
					</li>
					<li>
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Facebook
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Contact;
