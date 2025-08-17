import './styles/App.css';
import Router from './components/Router';

// Components
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
	return (
		<div className="app-container">
			{/* must render inside BrowserRouter (which is in main.jsx) */}
			<ScrollToTop />

			<Header />
			<main className="main-content">
				<Router />
			</main>
			<Footer />
		</div>
	);
};

export default App;
