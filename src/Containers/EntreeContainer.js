import { connect } from 'react-redux';
import Entree from './../Components/Entree/Entree';
import { addMenuItem, addToCurrentSeatOrder, clearCurrentSeatOrder, removeFromCurrentSeatOrder, addToCurrentTableOrder } from './../Actions/index';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  currentTable: store.currentTable,
  currentSeat: store.currentSeat,
  tables: store.tables,
  currentSeatOrder: store.currentSeatOrder
});

const mapDispatchToProps = (dispatch) => ({
  addMenuItem: (tableNumber, seatNumber, menuItem) => {
    return dispatch(addMenuItem(tableNumber, seatNumber, menuItem));
  },
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Entree);
