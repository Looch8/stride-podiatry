import './styles/App.css';
import Router from './components/Router';

// Components
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
	return (
		<div className="app-container">
			<Header />
			<main className="main-content">
				<Router />
			</main>

			<Footer />
		</div>
	);
};

export default App;
