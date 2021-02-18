import { Link } from 'react-router-dom';
import hands from '../images/h&s.pdf';
import environmental from '../images/environmental.pdf';
import corporate from '../images/corporate.pdf';
import quality from '../images/quality.pdf';
import protection from '../images/protection.pdf';
import equality from '../images/equality.pdf';
import communication from '../images/communication.pdf';
import pdflogo from '../images/iconfinder_pdf_272699.png';
import '../styles/policies.scss'
const Policies = () => {
	return (


		<div class="policies-page">
			<div class="home-link">
				<h1>Policies</h1>
				<Link to="/">Home</Link>
			</div>
			<div class="policies-container">
				<a href={hands}>Health & Safety<img alt="pdf logo" src={pdflogo} /></a>
				<a href={environmental}>Environmental Policy<img alt="pdf logo" src={pdflogo} /></a>
				<a href={corporate}>Corporate Social Responsibility<img alt="pdf logo" src={pdflogo} /></a>
				<a href={communication}>Communications policy<img alt="pdf logo" src={pdflogo} /></a>
				<a href={quality}>Quality Policy<img alt="pdf logo" src={pdflogo} /></a>
				<a href={protection}>Communications Policy<img alt="pdf logo" src={pdflogo} /></a>
				<a href={equality}>Protection of the Public Policy<img alt="pdf logo" src={pdflogo} /></a>
			</div>
		</div>

	);
}

export default Policies;