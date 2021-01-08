import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import mainReducer from 'reducers';

const middlewares = [ReduxThunk];

export const store = createStore(mainReducer, applyMiddleware(...middlewares));