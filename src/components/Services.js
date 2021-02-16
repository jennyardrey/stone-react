import { securityServices, conciergeServices, cleaningServices } from '../data/servicesData';
import '../styles/Services.scss'

const Services = () => {
	return (

		<>
			<div class="divider3"></div>

			<div class="security-services service" id="security-anchor" >
				<h2>Security Services</h2>
				{securityServices.map(service => {
					return <div class="single-service">
						<h3>{service.title}</h3>
						<h4>{service.subtitle}</h4>
						<p>{service.text}</p>
					</div>
				})}
			</div>
			<div class="concierge-services service" id="concierge-anchor">
				<h2>Concierge Services</h2>
				{conciergeServices.map(service => {
					return <div class="single-service" >
						<h3>{service.title}</h3>
						<h4>{service.subtitle}</h4>
						<p>{service.text}</p>
					</div>
				})}
			</div>
			<div class="cleaning-services service" id="cleaning-anchor">
				<h2>Cleaning Services</h2>
				{cleaningServices.map(service => {
					return <div class="single-service" >
						<h3>{service.title}</h3>
						<h4>{service.subtitle}</h4>
						<p>{service.text}</p>
					</div>
				})}
			</div>

		</>

	);
}

export default Services;