import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';

const appDOM = document.getElementById('app');

ReactDOM.render(Routes(browserHistory), appDOM);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const NextApp = require('./routes').default;
		ReactDOM.render(
			<AppContainer><NextApp /></AppContainer>,
			appDOM
		);
	});
}
