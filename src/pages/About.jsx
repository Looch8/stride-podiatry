import '../styles/About.css';
import profilePhoto from '../assets/images/profile-pic.webp';

const About = () => {
	return (
		<div className="about-container">
			<img
				src={profilePhoto}
				alt="Luke Wheldale"
				className="profile-photo"
			/>
			<div className="about-text">
				<h1>About Stride Podiatry</h1>
				<p>
					Stride Podiatry is a home visit service dedicated to
					providing high-quality foot care to individuals in the
					comfort of their homes. We cater to private patients as well
					as those with a Chronic Disease Management Plan through
					Medicare, DVA, and NDIS.
				</p>
				<p>
					Our mission is to offer accessible and comprehensive
					podiatry services for those who prefer or require in-home
					visits. Whether you need regular foot care, treatment for
					chronic conditions, or assistance with mobility and comfort,
					we are here to help.
				</p>
				<p>
					If you're looking for a trusted, reliable, and experienced
					podiatrist who comes to you, Stride Podiatry is the right
					choice.
				</p>
			</div>

			<div className="about-text">
				<h1>About Me</h1>
				<p>
					Hi, I'm Luke Wheldale, a qualified podiatrist with years of
					experience in community care, aged care, and private
					practice. My areas of interest include diabetes management,
					ingrown toenail treatment, sports podiatry, biomechanics,
					and general foot care
				</p>
				<p>
					I’m passionate about providing personalised care that helps
					my patients improve their mobility, comfort, and overall
					foot health.
				</p>
				<p>
					When I’m not helping my patients, you can find me playing
					games, reading, coding and spending time with my family and
					friends.
				</p>
			</div>
		</div>
	);
};

export default About;
