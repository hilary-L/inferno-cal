import Inferno from 'inferno';
import Component from 'inferno-component';

class MonthDay extends Component {
	render() {
		return (
			<div className="day">
				{`${this.props.number}`}
			</div>
		)
	}
}

export default MonthDay
