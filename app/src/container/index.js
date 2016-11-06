import { createStore } from 'redux';

import allReducers from './reducers';

const Store = createStore(allReducers);

export default Store;
