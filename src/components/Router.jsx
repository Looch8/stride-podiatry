import { Route, Routes, Navigate } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Booking from '../pages/Booking';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Referral from '../pages/Referral';
import NotFound from '../pages/NotFound';

// Service detail pages
import GeneralPodiatry from '../pages/services/GeneralPodiatry';
import IngrownToenail from '../pages/services/IngrownToenail';
import DiabetesCare from '../pages/services/DiabetesCare';
import Biomechanics from '../pages/services/Biomechanics';
import Orthotics from '../pages/services/Orthotics';
import HeelArchPain from '../pages/services/HeelArchPain';
import FootwearAdvice from '../pages/services/FootwearAdvice';
import SportsPodiatry from '../pages/services/SportsPodiatry';
import ForefootPain from '../pages/services/ForefootPain';

const Router = () => {
	console.log('Router build v1 :: has service routes = YES');
	return (
		<Routes>
			{/* Core routes (canonical) */}
			<Route path="/" element={<Home />} />
			<Route path="/about-us" element={<About />} />
			<Route path="/services" element={<Services />} />
			<Route path="/contact-us" element={<Contact />} />
			<Route path="/referral" element={<Referral />} />
			<Route path="/booking" element={<Booking />} />
			<Route path="/faq" element={<FAQ />} />

			{/* Service detail routes (canonical + trailing-slash twins) */}
			<Route
				path="/services/general-podiatry"
				element={<GeneralPodiatry />}
			/>
			<Route
				path="/services/general-podiatry/"
				element={<GeneralPodiatry />}
			/>

			<Route
				path="/services/ingrown-toenail"
				element={<IngrownToenail />}
			/>
			<Route
				path="/services/ingrown-toenail/"
				element={<IngrownToenail />}
			/>

			<Route
				path="/services/diabetes-foot-care"
				element={<DiabetesCare />}
			/>
			<Route
				path="/services/diabetes-foot-care/"
				element={<DiabetesCare />}
			/>

			<Route
				path="/services/biomechanics-gait"
				element={<Biomechanics />}
			/>
			<Route
				path="/services/biomechanics-gait/"
				element={<Biomechanics />}
			/>

			<Route path="/services/custom-orthotics" element={<Orthotics />} />
			<Route path="/services/custom-orthotics/" element={<Orthotics />} />

			<Route path="/services/heel-arch-pain" element={<HeelArchPain />} />
			<Route
				path="/services/heel-arch-pain/"
				element={<HeelArchPain />}
			/>

			<Route
				path="/services/footwear-advice"
				element={<FootwearAdvice />}
			/>
			<Route
				path="/services/footwear-advice/"
				element={<FootwearAdvice />}
			/>

			<Route
				path="/services/sports-podiatry"
				element={<SportsPodiatry />}
			/>
			<Route
				path="/services/sports-podiatry/"
				element={<SportsPodiatry />}
			/>

			<Route path="/services/forefoot-pain" element={<ForefootPain />} />
			<Route path="/services/forefoot-pain/" element={<ForefootPain />} />

			{/* --- Redirects to keep old/internal links working --- */}
			{/* Old top-level paths -> new canonical */}
			<Route
				path="/about"
				element={<Navigate to="/about-us" replace />}
			/>
			<Route
				path="/contact"
				element={<Navigate to="/contact-us" replace />}
			/>

			{/* Common service-path variants */}
			<Route
				path="/services/ingrown-toenails"
				element={<Navigate to="/services/ingrown-toenail" replace />}
			/>
			{/* Optional trailing-slash variants */}
			<Route
				path="/services/general-podiatry/"
				element={<Navigate to="/services/general-podiatry" replace />}
			/>
			<Route
				path="/services/ingrown-toenail/"
				element={<Navigate to="/services/ingrown-toenail" replace />}
			/>
			<Route
				path="/services/diabetes-foot-care/"
				element={<Navigate to="/services/diabetes-foot-care" replace />}
			/>
			<Route
				path="/services/biomechanics-gait/"
				element={<Navigate to="/services/biomechanics-gait" replace />}
			/>
			<Route
				path="/services/custom-orthotics/"
				element={<Navigate to="/services/custom-orthotics" replace />}
			/>
			<Route
				path="/services/heel-arch-pain/"
				element={<Navigate to="/services/heel-arch-pain" replace />}
			/>
			<Route
				path="/services/footwear-advice/"
				element={<Navigate to="/services/footwear-advice" replace />}
			/>
			<Route
				path="/services/sports-podiatry/"
				element={<Navigate to="/services/sports-podiatry" replace />}
			/>
			<Route
				path="/services/forefoot-pain/"
				element={<Navigate to="/services/forefoot-pain" replace />}
			/>

			{/* Catch-all 404 */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
