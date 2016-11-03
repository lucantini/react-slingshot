import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Layout from '../layouts/Layout';
import Home from '../views/home/Home';


const routers = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
	</Route>
);

export default routers;
