import './styles/App.css';

import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

// Components
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
	return (
		<div className="app-container">
			<Header />
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/booking" element={<Booking />} />
					<Route path="/contact-us" element={<Contact />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
};

export default App;
