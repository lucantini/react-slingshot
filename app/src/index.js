import 'babel-polyfill';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import Store from './container';

const appDOM = document.getElementById('app');

ReactDOM.render(Routes(Store), appDOM);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const NextApp = require('./routes').default;
		ReactDOM.render(
			<AppContainer><NextApp /></AppContainer>,
			appDOM
		);
	});
}
