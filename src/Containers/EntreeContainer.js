import { connect } from 'react-redux';
import Entree from './../Components/Entree/Entree';
import { addToCurrentSeatOrder, clearCurrentSeatOrder, removeFromCurrentSeatOrder, addToCurrentTableOrder, addOrderToCurrentSeat, removeCurrentSeat } from './../Actions/index';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  currentTable: store.currentTable,
  currentSeat: store.currentSeat,
  tables: store.tables,
  currentSeatOrder: store.currentSeatOrder
});

const mapDispatchToProps = (dispatch) => ({
  addToCurrentSeatOrder: (menuItem) => {
    return dispatch(addToCurrentSeatOrder(menuItem));
  },
  clearCurrentSeatOrder: () => {
    return dispatch(clearCurrentSeatOrder());
  },
  removeFromCurrentSeatOrder: (menuItem) => {
    return dispatch(removeFromCurrentSeatOrder(menuItem));
  },
  addToCurrentTableOrder: (currentSeatOrder, seatNumber) => {
    return dispatch(addToCurrentTableOrder(currentSeatOrder, seatNumber));
  },
  addOrderToCurrentSeat: (order) => {
    return dispatch(addOrderToCurrentSeat(order));
  },
  removeCurrentSeat: (currentSeat) => {
    return dispatch(removeCurrentSeat(currentSeat));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Entree);
