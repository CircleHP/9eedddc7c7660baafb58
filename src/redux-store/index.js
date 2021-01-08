import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import mainReducer from 'reducers';

const middlewares = [ReduxThunk, ReduxLogger];

export const store = createStore(mainReducer, applyMiddleware(...middlewares));