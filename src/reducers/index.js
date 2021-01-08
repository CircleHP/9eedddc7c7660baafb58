import { combineReducers } from 'redux';

import country from './country';

const mainReducer = combineReducers({
    country
});

export default mainReducer;