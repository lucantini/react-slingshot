import {Route, IndexRoute} from 'react-router';

import Layout from '../layouts/Layout';
import Home from '../views/home/Home';


const routers = (
	<Route component={Layout}>
		<IndexRoute path="/" component={Home}/>
	</Route>
);

export default routers;
