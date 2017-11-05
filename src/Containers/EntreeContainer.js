import { connect } from 'react-redux';
import Entree from './../Components/Entree/Entree';
import { addMenuItem, addToCurrentOrder, clearCurrentOrder } from './../Actions/index';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  currentTable: store.currentTable,
  currentSeat: store.currentSeat,
  tables: store.tables,
  currentOrder: store.currentOrder
});

const mapDispatchToProps = (dispatch) => ({
  addMenuItem: (tableNumber, seatNumber, menuItem) => {
    return dispatch(addMenuItem(tableNumber, seatNumber, menuItem));
  },
  addToCurrentOrder: (menuItem) => {
    return dispatch(addToCurrentOrder(menuItem));
  },
  clearCurrentOrder: () => {
    return dispatch(clearCurrentOrder());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Entree);
