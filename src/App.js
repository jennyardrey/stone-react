import Home from './components/Home';
import ClientStaff from './components/ClientStaff';
import './App.css';
import { Route, Switch } from 'react-router-dom';


function App() {
	return (


		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/client-staff" component={ClientStaff} />
		</Switch>

	);
}

export default App;
