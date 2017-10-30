import { combineReducers } from 'redux';
import currentUser from './LoginReducer.js';
import tables from './AddTableReducer';

const rootReducer = combineReducers({
  currentUser,
  tables
});

export default rootReducer;
