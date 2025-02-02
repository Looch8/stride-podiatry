import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Booking.css';

const Booking = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
		suburb: '',
		reason: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const templateParams = {
			from_full_name: formData.fullName,
			from_phone: formData.phone,
			from_email: formData.email,
			from_suburb: formData.suburb,
			reason_for_visit: formData.reason,
		};

		emailjs
			.send(
				window.env.VITE_EMAILJS_SERVICE_ID,
				window.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID,
				templateParams,
				window.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				alert('Your booking request has been sent!');
				setFormData({
					fullName: '',
					phone: '',
					email: '',
					suburb: '',
					reason: '',
				});
			})
			.catch((error) => {
				console.error('Error sending booking request:', error);
				alert(
					'Failed to send your booking request. Please try again later.'
				);
			});
	};

	return (
		<div className="booking-container">
			<h1>Request a Home Visit</h1>
			<p>We’ll contact you to schedule an appointment at your home.</p>
			<form className="booking-form" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="fullName">Full Name *</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
						placeholder="Enter your full name"
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="phone">Phone *</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Enter your phone number"
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Enter your email address"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="suburb">Suburb</label>
					<input
						type="text"
						id="suburb"
						name="suburb"
						value={formData.suburb}
						onChange={handleChange}
						placeholder="Enter your suburb"
					/>
				</div>

				<div className="form-group" id="booking-reason">
					<label htmlFor="reason">Reason for Visit</label>
					<textarea
						id="reason"
						name="reason"
						rows="5"
						value={formData.reason}
						onChange={handleChange}
						placeholder="Foot pain, orthotic review, nail care, etc."
					></textarea>
				</div>

				<button type="submit" className="submit-button">
					Book Appointment
				</button>
			</form>
		</div>
	);
};

export default Booking;
