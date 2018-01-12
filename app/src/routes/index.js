import { Route } from 'react-router';
import React from 'react';

import Home from '../views/home/Home';
import About from '../views/about/About';

export default (
	<Route path="/" component={Home} >
		<Route path="/" exact component={Home} />
		<Route path="about" component={About} />
	</Route>
);
