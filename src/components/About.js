import '../styles/About.scss'
import stoneMen from '../images/stone-men.png';
import stoneMenFull from '../images/stonemenfull.jpg'

const About = () => {
	return (
		<>
			<div class="about">
				<div class="divider"></div>

				<div class="main-text">
					<h3>Who we are:</h3>
					<p data-aos="fade-right" class="about-text">SMG is a northwest based business with expertise in security,
					cleaning, maintenance and
					procurement services.
					</p>

					<p data-aos="fade-right" class="about-text">Well established in our sectors, we have a record of fast
					mobilisation and reliability
					which is difficult to
					match.</p>

					<p data-aos="fade-left" class="about-text">Whatever our role, we believe communication is key and we work with
					our clients to
					provide a service that
					perfectly fits
					the assignment</p>
				</div>


			</div>

			<div class="main-list">
				<div class="divider2"></div>
				<h3>What we do:</h3>
				<ul>
					<li>Service 1</li>
					<li>Service 2</li>
					<li>Service 3</li>
					<li>Service 4</li>
				</ul>
			</div>
		</>
	);
}

export default About;