import { securityServices, conciergeServices, cleaningServices } from '../data/servicesData';
import '../styles/Services.scss'

const Services = () => {
	return (

		<>
			<div class="divider3"></div>

			<div class="security-services" id="security-anchor" >
				{securityServices.map(service => {
					return <div class="single-service">
						<h3>{service.title}</h3>
						<h4>{service.subtitle}</h4>
						<p>{service.text}</p>
					</div>
				})}
			</div>
			<div class="concierge-services" id="concierge-anchor">
				{conciergeServices.map(service => {
					return <div class="single-service" >
						<h3>{service.title}</h3>
						<h4>{service.subtitle}</h4>
						<p>{service.text}</p>
					</div>
				})}
			</div>
			<div class="cleaning-services" id="cleaning-anchor">
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