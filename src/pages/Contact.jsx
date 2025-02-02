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

		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			message: formData.message,
		};

		emailjs
			.send(
				window.env.VITE_EMAILJS_SERVICE_ID,
				window.env.VITE_EMAILJS_TEMPLATE_ID,
				templateParams,
				window.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				alert('Your message has been sent!');
				setFormData({ name: '', email: '', message: '' });
			})
			.catch((error) => {
				console.error('Error sending email:', error);
				alert('Failed to send your message. Please try again later.');
			});
	};

	return (
		<section className="contact">
			<h2>Contact Stride Podiatry</h2>
			<p>
				Have a question? Need more information? Call us, email us, or
				follow us on social media!
			</p>

			<div className="contact-info">
				<ul>
					<li>
						📞 <strong>Call us:</strong>{' '}
						<a href="tel:+61468518993">0468 518 993</a>
					</li>
					<li>
						📧 <strong>Email us:</strong>{' '}
						<a href="mailto:stridepodiatry@outlook.com.au">
							stridepodiatry@outlook.com.au
						</a>
					</li>
					<li>
						📱 <strong>Follow us:</strong>{' '}
						<a
							href="https://www.facebook.com/profile.php?id=61570588927493"
							target="_blank"
							rel="noopener noreferrer"
						>
							Facebook
						</a>{' '}
						|{' '}
						<a
							href="https://www.instagram.com/stride.podiatry/?hl=en"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
					</li>
				</ul>
			</div>

			<h3>Or send us a message:</h3>
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
		</section>
	);
};

export default Contact;
