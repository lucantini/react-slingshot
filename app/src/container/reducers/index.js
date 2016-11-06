import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import homeReducer from './homeReducer';

const middleware = applyMiddleware(thunk, logger());

const allReducers = combineReducers({
	homeReducer,
	middleware,
});

export default allReducers;
