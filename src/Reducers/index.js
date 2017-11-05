import { combineReducers } from 'redux';
import currentUser from './LoginReducer.js';
import currentTable from './CurrentTableReducer.js';
import currentSeat from './CurrentSeatReducer.js';
import currentSeatOrder from './currentSeatOrderReducer.js';
import tables from './AddTableReducer';
// import seats from './AddSeatReducer';

const rootReducer = combineReducers({
  currentUser,
  tables,
  // seats,
  currentTable,
  currentSeat,
  currentSeatOrder
});

export default rootReducer;
