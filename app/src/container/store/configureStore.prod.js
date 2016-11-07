import { createStore } from 'redux';
import allReducers from '../reducers';

export default function configureStore(initialState) {
	return createStore(allReducers, initialState);
}
