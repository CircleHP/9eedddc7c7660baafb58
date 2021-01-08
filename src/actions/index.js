import { bindActionCreators } from 'redux';

import { store } from 'redux-store';
import * as actionCreators from './all';

const action = bindActionCreators(actionCreators, store.dispatch);

export default action;