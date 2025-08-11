import '../styles/Footer.css';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-contact">
					<a href="tel:+61468518993" className="contact-link">
						<i className="fas fa-phone"></i>
						<span>0468 518 993</span>
					</a>
					<a
						href="mailto:luke@stride-podiatry.com.au"
						className="contact-link"
					>
						<i className="fas fa-envelope"></i>
						<span>luke@stride-podiatry.com.au</span>
					</a>
				</div>

				<div className="social-links">
					<a
						href="https://www.facebook.com/profile.php?id=61570588927493"
						target="_blank"
						rel="noreferrer"
						aria-label="Facebook"
					>
						<i className="fab fa-facebook-square"></i>
					</a>
					<a
						href="https://www.instagram.com/stride.podiatry/?hl=en"
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram"
					>
						<i className="fab fa-instagram"></i>
					</a>
				</div>

				<p className="copyright">
					© {currentYear} Stride Podiatry. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
