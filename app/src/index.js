import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

const appDOM = document.getElementById('app');

ReactDOM.render(Routes(), appDOM);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const NextApp = require('./routes').default;
		ReactDOM.render(
			<AppContainer><NextApp /></AppContainer>,
			appDOM
		);
	});
}
