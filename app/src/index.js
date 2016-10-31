import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layouts/Layout';

const appDOM = document.getElementById('app');

ReactDOM.render(<Layout />, appDOM);

if (module.hot) {
	module.hot.accept('./layouts/Layout', () => {
		const NextApp = require('./layouts/Layout').default;
		ReactDOM.render(
			<AppContainer><NextApp /></AppContainer>,
			appDOM
		);
	});
}
