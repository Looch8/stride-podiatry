import { Route, Routes } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Booking from '../pages/Booking';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Referral from '../pages/Referral';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/services" element={<Services />} />
			<Route path="/about-us" element={<About />} />
			<Route path="/booking" element={<Booking />} />
			<Route path="/contact-us" element={<Contact />} />
			<Route path="/faq" element={<FAQ />} />
			<Route path="/referral" element={<Referral />} />
		</Routes>
	);
};

export default Router;
