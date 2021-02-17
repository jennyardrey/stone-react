import { Link } from 'react-router-dom';
import '../styles/Title.scss';
import logo from '../images/stone-logo-21-orange.png'

const Title = () => {
	return (

		<div class="header-content">
			<Link to="/">
				<img id="logo" src={logo} alt="stone-logo"
					width="600" height="400" />
			</Link>
			<h1 class="logo-words">SMG</h1>
			<h2 class="subhead">Security. Cleaning. Concierge.</h2>

		</div>

	);
}

export default Title;