import Inferno from 'inferno';
import { Provider } from 'inferno-mobx';

import calendarStore from './stores/calendarStore';
import App from './App';

if(module.hot) {
	require('inferno-devtools')
}

Inferno.render(
	<Provider calendarStore={ calendarStore }>
		<App/>
	</Provider>, document.querySelector('#app')
)

if (module.hot) {
  module.hot.accept()
}
