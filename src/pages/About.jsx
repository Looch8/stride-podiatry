import '../styles/About.css';
import profilePhoto from '../assets/images/profile-pic.webp';
import casualPhoto from '../assets/images/me-casual.jpg';

const About = () => {
	return (
		<div className="about-container">
			<div className="about-section">
				<div className="about-text">
					<h1>About Stride Podiatry</h1>
					<p>
						Stride Podiatry is a home visit service dedicated to
						providing high-quality foot care to individuals in the
						comfort of their homes. We cater to private patients as
						well as those with a Chronic Disease Management Plan
						through Medicare, DVA, and NDIS.
					</p>
					<p>
						Our mission is to offer accessible and comprehensive
						podiatry services for those who prefer or require
						in-home visits. Whether you need regular foot care,
						treatment for chronic conditions, or assistance with
						mobility and comfort, we are here to help.
					</p>
					<p>
						If you&apos;re looking for a trusted, reliable, and
						experienced podiatrist who comes to you, Stride Podiatry
						is the right choice.
					</p>
				</div>
				<img
					src={profilePhoto}
					alt="Stride Podiatry - Professional Service"
					className="profile-photo"
				/>
			</div>

			<div className="about-section">
				<img
					src={casualPhoto}
					alt="Luke Wheldale - Personal"
					className="profile-photo"
				/>
				<div className="about-text">
					<h1>About Me</h1>
					<p>
						Hi, I&apos;m Luke Wheldale, and while I&apos;m
						passionate about providing quality podiatry care,
						I&apos;m also a family man and active member of my
						community. I&apos;m blessed to be married to my
						wonderful wife and we have a beautiful young daughter
						who brings so much joy to our lives.
					</p>
					<p>
						Faith plays an important role in my life, and I&apos;m
						an active member of my local church community. When
						I&apos;m not helping patients or spending time with my
						family, you can find me playing guitar, reading,
						travelling. I believe in maintaining a healthy work-life
						balance and making time for the things that matter most.
					</p>
					<p>
						I&apos;m grateful for the opportunity to serve my
						community through podiatry while also being present for
						my family and pursuing my personal interests. It&apos;s
						this balance that helps me bring my best self to both my
						professional and personal life.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
