import Inferno from 'inferno';
import Component from 'inferno-component';
import { observer } from 'inferno-mobx';

import MonthDay from './Month/MonthDay';

@observer(['calendarStore'])
class Sidebar extends Component {
	render({ calendarStore }) {
		console.log(calendarStore.daysArray);
		return (
			<div className="sidebar">
				<h1>This is the sidebar</h1>
				{calendarStore.daysArray.map((item) => {
					return <MonthDay number={item} />
				})}
			</div>
		)
	}
}

export default Sidebar
