import { combineReducers } from 'redux';
import currentUser from './LoginReducer.js';

const rootReducer = combineReducers({
  currentUser
});

export default rootReducer;
