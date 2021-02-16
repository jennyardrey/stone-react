import '../styles/Footer.scss';
import creds from '../images/acreds.png';
import sia from '../images/SIA.png';

const Footer = () => {
	return (

		<footer>
			<section class="info">
				<img id="sia-img" src={sia} alt="sia-badge" />
				<p>Stone Management Group holds
				Approved
				Contractor Status for the provision of Security Guarding and Key Holding services and Public Space
				Surveillance
				(CCTV) services.</p>

			</section>
			<section class="footer-top">

				<img id="creds" src={creds} alt="sia-accred" />
			</section>
			<section class="footer-bottom">
				<p>© Copyright Stone Management Group
				Company Reg Number - 06479112 | Registered in England & Wales | Registered Address - Suite 31, The Colonnades,
				Albert
				Dock, Liverpool, L3 4AA</p>
			</section>
		</footer >
	);
}

export default Footer;