import '../styles/About.css';
import { Helmet } from 'react-helmet-async';
import profilePhoto from '../assets/images/profile-pic.webp';
import casualPhoto from '../assets/images/me-casual.jpg';

const About = () => {
	return (
		<div className="about-container">
			<Helmet>
				<title>
					About Stride Podiatry | Mobile Podiatrist Adelaide
				</title>
				<meta
					name="description"
					content="Meet Luke Wheldale of Stride Podiatry. We provide convenient, expert mobile podiatry across Adelaide with a friendly, patient-first approach."
				/>
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://stride-podiatry.com.au/about-us/"
				/>
			</Helmet>

			<div className="about-section">
				<div className="about-text">
					<h1>About Stride Podiatry</h1>
					<p>
						Stride Podiatry is a home-visit service dedicated to
						providing high-quality podiatry care in the comfort of
						your home. We support private patients as well as
						Medicare Chronic Disease Management(CDM/EPC), DVA and
						NDIS participants.
					</p>
					<p>
						Our mission is to make foot care accessible and
						comprehensive for people who prefer or require in-home
						visits, from regular care to chronic conditions and
						mobility support.
					</p>
					<p>
						If you’re looking for a trusted, reliable podiatrist in
						Adelaide who comes to you, Stride Podiatry is here to
						help.
					</p>
				</div>
				<img
					src={profilePhoto}
					alt="Stride Podiatry — home-visit podiatry in Adelaide"
					className="profile-photo"
					loading="lazy"
					width="420"
					height="420"
				/>
			</div>

			<div className="about-section">
				<img
					src={casualPhoto}
					alt="Luke Wheldale, Podiatrist"
					className="profile-photo"
					loading="lazy"
					width="420"
					height="420"
				/>
				<div className="about-text">
					<h2>About Luke</h2>
					<p>
						Hi, I’m Luke Wheldale. I’m passionate about delivering
						quality podiatry care and serving the Adelaide
						community. I’m a family man and an active member of my
						local church.
					</p>
					<p>
						When I’m not helping patients, you’ll find me with my
						family, playing guitar, reading or travelling. Finding
						balance helps me bring my best to both work and home.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
