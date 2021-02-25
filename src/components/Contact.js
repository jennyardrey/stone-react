import '../styles/Contact.scss'
import sia from '../images/SIA.png';

const Contact = () => {
	return (


		<div class="contact" id="contact-anchor">
			<h2>Get in touch...</h2>
			<div className="contact-container">
				<div class="contact-box">
					<i class="fas fa-at icon"></i>
					<p>Send us an email on <a href="mailto: info@stonemg.co.uk">info@stonemg.co.uk</a></p>
				</div>
				<div class="contact-box">
					<i class="fas fa-phone icon"></i>
					<p>Give us a ring for free on	<a href="tel: 08000 32 99 88">08000 32 99 88</a></p>
				</div>
			</div>
			<ul class="footer-nav">
				<li class="social">
					<a href="https://twitter.com/StoneMG_UK"><i class="fab fa-twitter"></i></a>
				</li>
				<li class="social">
					<a href="https://www.facebook.com/StoneMGUK/"><i class="fab fa-facebook"></i></a>
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