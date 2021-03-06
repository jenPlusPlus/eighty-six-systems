import { connect } from 'react-redux';
import { addSeat, addCurrentSeat, addToAllOrders, clearCurrentTableOrder, addMenuItem, removeTable, removeCurrentTable } from './../Actions/index.js';
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
  },
  addToAllOrders: (serverName, tableNumber, currentTableOrder) => {
    return dispatch(addToAllOrders(serverName, tableNumber, currentTableOrder));
  },
  clearCurrentTableOrder: () => {
    return dispatch(clearCurrentTableOrder());
  },
  addMenuItem: (tableNumber, currentTableOrder) => {
    return dispatch(addMenuItem(tableNumber, currentTableOrder));
  },
  removeTable: (indexToRemove) => {
    return dispatch(removeTable(indexToRemove));
  },
  removeCurrentTable: (currentTable) => {
    return dispatch(removeCurrentTable(currentTable));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatManager);
