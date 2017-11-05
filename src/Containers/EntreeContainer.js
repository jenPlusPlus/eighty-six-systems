import { connect } from 'react-redux';
import Entree from './../Components/Entree/Entree';
import { addMenuItem } from './../Actions/index';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  currentTable: store.currentTable,
  currentSeat: store.currentSeat,
  tables: store.tables
});

const mapDispatchToProps = (dispatch) => ({
  addMenuItem: (tableNumber, seatNumber, menuItem) => {
    return dispatch(addMenuItem(tableNumber, seatNumber, menuItem));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Entree);
