import { connect } from 'react-redux';
import { removeFromCurrentTableOrder } from './../Actions/index.js';
import Seat from './../Components/Seat/Seat';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  currentTable: store.currentTable,
  tables: store.tables,
  currentTableOrder: store.currentTableOrder,
  currentSeatOrder: store.currentSeatOrder
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCurrentTableOrder: (menuItem, seatNumber) => {
    return dispatch(removeFromCurrentTableOrder(menuItem, seatNumber));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Seat);
