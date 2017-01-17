import './sass/App.scss';

import Inferno from 'inferno';
import Component from 'inferno-component';
import moment from 'moment';

import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {

	state = {
		today
	}

	render(props, state) {
		return (
			<div className="app">
				<Sidebar />
			</div>
		)
	}
}

export default App
