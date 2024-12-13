import '../styles/ContactStyles.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="social-links">
				<a
					href="https://www.facebook.com"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-facebook-square"></i>
				</a>
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-instagram"></i>
				</a>
			</div>
			<p>&copy; 2024 Stride Podiatry. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
