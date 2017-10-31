import { connect } from 'react-redux';
import { addSeat } from './../Actions/index.js';
import SeatManager from './../Components/SeatManager/SeatManager';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  tables: store.tables,
  seats: store.seats,
  currentTable: store.currentTable
});

const mapDispatchToProps = (dispatch) => ({
  addSeat: (tableNumber, seat) => {
    return dispatch(addSeat(tableNumber, seat));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatManager);
