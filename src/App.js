import Home from './components/Home';
import ClientStaff from './components/ClientStaff';
import Mission from './components/Mission';
import Policies from './components/Policies'
import './App.css';
import { Route, Switch } from 'react-router-dom';


function App() {
	return (


		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/client-staff" component={ClientStaff} />
			<Route path="/mission" component={Mission} />
			<Route path="/policies" component={Policies} />

		</Switch>

	);
}

export default App;
