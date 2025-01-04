import '../styles/ContactStyles.css';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="social-links">
				<a
					href="https://www.facebook.com/profile.php?id=61570588927493"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-facebook-square"></i>
				</a>
				<a
					href="https://www.instagram.com/stride.podiatry/?hl=en"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-instagram"></i>
				</a>
			</div>
			<p>&copy; {currentYear} Stride Podiatry. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
