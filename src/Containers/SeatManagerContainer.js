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
  addSeat: (seat) => {
    return dispatch(addSeat(seat));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatManager);
