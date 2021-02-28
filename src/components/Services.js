import { securityServices, conciergeServices, cleaningServices } from '../data/servicesData';
import '../styles/Services.scss'
import diamond from "../images/diamond-left.png";
import diamond2 from "../images/diamond-right.png";
/* import manned from '../images/manned.png'
import mobile from '../images/mobile.png'
import canine from '../images/canine.png'
import alarm from '../images/canine.png'
import key from '../images/key.png'
import lock from '../images/lock.png' */


const Services = () => {
	return (

		<>
			<div class="divider3"></div>

			<div class="security-services service" id="security-anchor" >
				<h2>Security Services</h2>

				<div class="service-group">
					{securityServices.map((service, key) => {
						return <div key={key} class="single-service">
							<div class="image" id={service.image}></div>
							<div className="content">
								<h4>{service.subtitle}</h4>
								<h3>{service.title}</h3>
								<p>{service.text}</p>
							</div>
						</div>
					})}
				</div>

			</div>

			<div class="concierge-services service" id="concierge-anchor">
				<h2>Concierge Services</h2>
				<div class="service-group">
					{conciergeServices.map((service, key) => {
						return <div key={key} class="single-service" >
							<div class="image" id={service.image}></div>
							<div className="content">
								<h3>{service.title}</h3>
								<h4>{service.subtitle}</h4>
								<p>{service.text}</p>
							</div>
						</div>
					})}
				</div>
			</div>
			<div class="cleaning-services service" id="cleaning-anchor">
				<h2>Cleaning Services</h2>
				<div class="service-group">

					{cleaningServices.map((service, key) => {
						return <div key={key} class="single-service" >
							<div class="image" id={service.image}></div>
							<div className="content">
								<h3>{service.title}</h3>
								<h4>{service.subtitle}</h4>
								<p>{service.text}</p>
							</div>
						</div>
					})}
				</div>
			</div>

		</>

	);
}

export default Services;