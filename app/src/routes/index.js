//	@flow
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';

const Routes = (store: Object = {}): Router => (<Provider store={store}>
	<Router history={browserHistory} routes={routes} />
</Provider>);


export default Routes;
