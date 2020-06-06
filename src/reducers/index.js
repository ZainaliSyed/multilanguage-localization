import {combineReducers} from 'redux';
import {LOGOUT} from '../actions/ActionTypes';
import langDirection from './langDirection';
const appReducer = combineReducers({
  langDirection,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    let newState = {};
    for (let key of Object.keys(state)) {
      newState[key] = {
        ...state[key],
        data: [],
      };
    }
    state = {
      ...newState,
    };
  }
  return appReducer(state, action);
};

export default appReducer;
