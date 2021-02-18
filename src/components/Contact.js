import '../styles/Contact.scss'
import sia from '../images/SIA.png';

const Contact = () => {
	return (


		<div class="contact" id="contact-anchor">
			<h2>Get in touch...</h2>
			<div class="contact-box">
				<i class="fas fa-at icon"></i>
				<p>Send us an email on example@email.com</p>
			</div>
			<div class="contact-box">
				<i class="fas fa-phone icon"></i>
				<p>Give us a ring for free on 0800 800 00</p>
			</div>
			<ul class="footer-nav">
				<li class="social">
					<a href=""><i class="fab fa-twitter"></i></a>
				</li>
				<li class="social">
					<a href="http://twitter.com"><i class="fab fa-facebook"></i></a>
				</li>
				<li class="social">
					<a href="http://twitter.com"><i class="fab fa-instagram"></i></a>
				</li>
			</ul>
			<section class="info">
				<img id="sia-img" src={sia} alt="sia-badge" />
				<p>Stone Management Group holds
				Approved
				Contractor Status for the provision of Security Guarding and Key Holding services and Public Space
				Surveillance
				(CCTV) services.</p>
			</section>
		</div>
	);
}

export default Contact;