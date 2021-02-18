import '../styles/Footer.scss';
import creds from '../images/acreds.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (

		<div class="footer">


			<section class="footer-bottom">
				<img id="creds" src={creds} alt="sia-accred" />
				<div class="docs"><Link to="/policies">Policies</Link> | <Link to="/mission">Mission Statement</Link></div>
				<p class="copyright">© Copyright Stone Management Group
				Company Reg Number - 06479112 | Registered in England & Wales | Registered Address - Suite 31, The Colonnades,
				Albert
				Dock, Liverpool, L3 4AA</p>
			</section>
		</div >
	);
}


export default Footer;