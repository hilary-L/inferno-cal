import './sass/App.scss';

import Inferno from 'inferno';
import Component from 'inferno-component';
import { observer } from 'inferno-mobx';
import moment from 'moment';

import Sidebar from './components/Sidebar/Sidebar';

@observer(['calendarStore'])
class App extends Component {

	render(props, state) {
		console.log(this.props.calendarStore);
		return (
			<div className="app">
				<Sidebar />
			</div>
		)
	}
}

export default App
