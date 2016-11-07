import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import homeReducer from './homeReducer';

const middleware = applyMiddleware(thunk, logger());

const allReducers = combineReducers({
	homeReducer,
	middleware,
	routing: routerReducer,
});

export default allReducers;
