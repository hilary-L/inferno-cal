import { observable, computed } from 'mobx';
import moment from 'moment';

class CalendarStore {

	@observable calendarDate = {};
	@observable tasks = [];

	constructor() {

		this.calendarDate = {
			moment: moment(),
			month: moment().format('MMMM'),
			day: moment().format('D'),
			year: moment().format('YYYY'),
			daysInMonth: moment().daysInMonth()
		}

	}

	@computed get daysArray() {
		let daysArr = [];

		for(let i = 1; i <= this.calendarDate.daysInMonth; i++) {
			daysArr.push(i)
		}
		
		return daysArr
	}

}

const calendarStore = new CalendarStore();

export default calendarStore
