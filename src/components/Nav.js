import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/Nav.scss';
import navLogo from '../images/stone-logo-21-white.png';
import { Link as LinkA } from 'react-router-dom'
import { Link } from 'react-scroll'
import logo from '../images/alternative_logo_sketch.png'


const Nav = () => {

	const [isNavVisible, setNavVisibility] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 769px)");
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

	const handleMediaQueryChange = mediaQuery => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};
	const toggleNav = () => {
		setNavVisibility(!isNavVisible);
	};

	return (

		<nav id="nav-outer">
			<img height="50px" alt="nav logo" src={navLogo} />
			<CSSTransition
				in={!isSmallScreen || isNavVisible}
				timeout={350}
				classNames="NavAnimation"
				unmountOnExit
			>
				<nav className="nav-links">
					<img id="logo" src={logo} alt="stone-logo"></img>
					<LinkA className="active nav-link" to="/client-staff" >Client/Staff Area</LinkA>
					<Link onClick={toggleNav} className="active nav-link hide" to="security-anchor" spy={true} smooth={true} duration={900} offset={-200}>Security Services</Link>
					<Link onClick={toggleNav} className="active nav-link hide" to="concierge-anchor" spy={true} smooth={true} duration={900} offset={-200}>Concierge Services</Link>
					<Link onClick={toggleNav} className="active nav-link hide" to="cleaning-anchor" spy={true} smooth={true} duration={900} offset={-200}>Cleaning Services</Link>

					<Link onClick={toggleNav} className="active nav-link" to="contact-anchor" spy={true} smooth={true} duration={900} offset={-200}>Contact Us</Link>
				</nav>
			</CSSTransition>
			<button onClick={toggleNav} className="burger">
				<i className="fas fa-bars"></i>
			</button>
		</nav >

	);
}

export default Nav;


