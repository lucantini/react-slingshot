import React from 'react';
import { Router } from 'react-router';

import routes from './routes';

const Routes = history => <Router history={history} routes={routes} />;

export default Routes;
