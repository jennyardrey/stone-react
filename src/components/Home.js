import Contact from './Contact'
import Nav from './Nav';
import Title from './Title';
import About from './About';
import Services from './Services';
import Footer from './Footer';
import '../styles/Home.scss'

const Home = () => {
	return (

		<div className="App">
			<header >
				<Nav />
				<Title />
			</header>
			<main>
				<About />
				<Services />
				<Contact />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default Home;