import '../styles/About.css';
import profilePhoto from '../assets/images/profile_photo.jpeg';

const About = () => {
	return (
		<div className="about-container">
			<img
				src={profilePhoto}
				alt="Luke Wheldale"
				className="profile-photo"
			/>
			<div className="about-text">
				<h1>About Me</h1>
				<p>
					Hi, I'm Luke Wheldale, a podiatrist specialising in home
					care podiatry services across Adelaide. I am passionate
					about bringing convenient and personalised foot care to
					patients in the comfort of their own homes.
				</p>
				<p>
					With years of experience and dedication to providing the
					best care, I aim to improve mobility, comfort, and overall
					foot health for my patients, ensuring they can live their
					lives pain-free.
				</p>
			</div>
		</div>
	);
};

export default About;
