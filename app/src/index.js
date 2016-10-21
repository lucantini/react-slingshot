import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appDOM = document.getElementById('app');

ReactDOM.render(<App />, appDOM);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		ReactDOM.render(
			<AppContainer><NextApp /></AppContainer>,
			appDOM
		);
	});
}
