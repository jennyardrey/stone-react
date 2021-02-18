import { Link } from 'react-router-dom';
import '../styles/Mission.scss'

const Mission = () => {
	return (

		<div class="mission-page">
			<div class="home-link">
				<h1>Stone Management Group Ltd<br />Mission Statement</h1>
				<Link to="/">&#10232; Back to Home</Link>
			</div>
			<h3>Strong enough to cope, small enough to care</h3>


			<p>Stone Management Group Limited seeks to provide professional security services to its clients in such manner that they feel confident, satisfied and content in the knowledge that their needs are being met and exceeded with courtesy, professionalism, competence and efficiency.
				<br /><br />

			The Company seeks to achieve this by ensuring first of all that its employees are trained and equipped to the highest possible standard, that they are familiar with every aspect of their roles, procedures, obligations and instructions; that they are confident in their roles, and that all employees feel valued, respected and cared for.
				<br /><br />

			The Company further seeks to understand the needs of clients as deeply as possible, and to build relationships of trust, respect and confidence in whatever the nature of the service that is required and delivered.
				<br />
				<br />

In this way we seek to highly esteem the two most important facets of the Company’s business: Client satisfaction and employee welfare, since we believe that this mixture will ensure the Company’s success into the future.	</p>
		</div>

	);
}

export default Mission;