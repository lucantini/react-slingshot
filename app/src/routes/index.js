import { Route } from 'react-router';
import React from 'react';

import Home from '../views/Home/Home';
import About from '../views/About/About';

export default (
	<Route path="/" component={Home} >
		<Route path="/" exact component={Home} />
		<Route path="about" component={About} />
	</Route>
);
