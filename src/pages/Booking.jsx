import { useEffect } from 'react';
import '../styles/Booking.css';

const Booking = () => {
	useEffect(() => {
		// Add the script for the Cliniko iframe functionality
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.innerHTML = `
      window.addEventListener('message', function handleIFrameMessage (e) {
        var clinikoBookings = document.getElementById('cliniko-86479674');
        if (typeof e.data !== 'string') return;
        if (e.data.search('cliniko-bookings-resize') > -1) {
          var height = Number(e.data.split(':')[1]);
          clinikoBookings.style.height = height + 'px';
        }
        e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
      });
    `;
		document.body.appendChild(script);

		// Cleanup the script when component unmounts
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="booking-container">
			<h1>Booking</h1>
			<p>
				Use the form below to book a home visit podiatry service. We
				will contact you to confirm your appointment.
			</p>
			<iframe
				id="cliniko-86479674"
				src="https://stride-podiatry.au4.cliniko.com/bookings?embedded=true"
				frameBorder="0"
				scrolling="auto"
				width="100%"
				height="1000"
				style={{ pointerEvents: 'auto' }}
				title="Cliniko Booking"
			></iframe>
		</div>
	);
};

export default Booking;
