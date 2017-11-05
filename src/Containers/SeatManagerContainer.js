import { connect } from 'react-redux';
import { addSeat, addCurrentSeat } from './../Actions/index.js';
import SeatManager from './../Components/SeatManager/SeatManager';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  tables: store.tables,
  currentTable: store.currentTable,
  currentSeat: store.currentSeat,
  currentTableOrder: store.currentTableOrder
});

const mapDispatchToProps = (dispatch) => ({
  addSeat: (tableNumber, seat) => {
    return dispatch(addSeat(tableNumber, seat));
  },
  addCurrentSeat: (seat) => {
    return dispatch(addCurrentSeat(seat));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatManager);
