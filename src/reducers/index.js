import {combineReducers} from 'redux';

import langDirection from './langDirection';
const appReducer = combineReducers({
  langDirection,
});

export default appReducer;
