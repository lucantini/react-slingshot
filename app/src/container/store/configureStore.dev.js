import { createStore } from 'redux';
import allReducers from '../reducers';

export default function configureStore(initialState) {
	const store = createStore(allReducers, initialState);

	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers').default)
		);
	}

	return store;
}
