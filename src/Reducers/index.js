import { combineReducers } from 'redux';
import currentUser from './LoginReducer.js';
import tables from './AddTableReducer';
import seats from './AddSeatReducer';

const rootReducer = combineReducers({
  currentUser,
  tables,
  seats
});

export default rootReducer;
